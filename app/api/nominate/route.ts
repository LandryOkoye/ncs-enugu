import { google } from "googleapis"
import { Readable } from "stream"
import { NextResponse } from "next/server"

const DRIVE_FOLDER_ID = process.env.GOOGLE_DRIVE_FOLDER_ID!

const SHEET_HEADERS = [
  "Timestamp",
  "Nominating Type",
  "Nominator Name",
  "Nominator Phone",
  "Relationship",
  "Nominee Name",
  "Nominee Org",
  "Nominee Role",
  "Nominee State",
  "Nominee Email",
  "Nominee Phone",
  "Years Active",
  "Flagship Categories",
  "Special Categories",
  "Strongest Category",
  "Impact Description",
  "Supporting Links",
  "Supporting Doc URLs",
  "Nominee Photo URL",
  "Confirm Accuracy",
  "Confirm Consent",
  "Extra Notes",
  "How Heard",
  "Status",
]

function getAuth() {
  return new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    },
    scopes: [
      "https://www.googleapis.com/auth/spreadsheets",
      "https://www.googleapis.com/auth/drive.file",
    ],
  })
}

async function uploadToDrive(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  drive: any,
  file: File,
  parentId: string
): Promise<string> {
  const buffer = Buffer.from(await file.arrayBuffer())
  const res = await drive.files.create({
    requestBody: {
      name: file.name,
      parents: [parentId],
    },
    media: {
      mimeType: file.type || "application/octet-stream",
      body: Readable.from(buffer),
    },
    fields: "id,webViewLink",
  })
  return res.data.webViewLink ?? `https://drive.google.com/file/d/${res.data.id}/view`
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData()

    const get = (key: string) => (formData.get(key) as string) ?? ""

    const auth = getAuth()
    const drive = google.drive({ version: "v3", auth })
    const sheets = google.sheets({ version: "v4", auth })
    const sheetId = process.env.GOOGLE_NOMINATIONS_SHEET_ID ?? process.env.GOOGLE_SHEET_ID

    if (!sheetId) {
      return NextResponse.json({ error: "Sheet not configured" }, { status: 500 })
    }

    // Create nominee subfolder for organisation
    const nomineeName = get("nomineeName")
    const timestamp = new Date().toISOString().slice(0, 10)
    const subfolderName = `${nomineeName || "Nominee"} – ${timestamp}`

    let folderId = DRIVE_FOLDER_ID
    if (DRIVE_FOLDER_ID) {
      const folderRes = await drive.files.create({
        requestBody: {
          name: subfolderName,
          mimeType: "application/vnd.google-apps.folder",
          parents: [DRIVE_FOLDER_ID],
        },
        fields: "id",
      })
      folderId = folderRes.data.id ?? DRIVE_FOLDER_ID
    }

    // Upload supporting documents
    const supportingDocFiles = formData.getAll("supportingDocs") as File[]
    const supportingDocUrls: string[] = []
    for (const file of supportingDocFiles) {
      if (file.size > 0) {
        const url = await uploadToDrive(drive, file, folderId)
        supportingDocUrls.push(url)
      }
    }

    // Upload nominee photo
    const nomineePic = formData.get("nomineePic") as File | null
    let nomineePicUrl = ""
    if (nomineePic && nomineePic.size > 0) {
      nomineePicUrl = await uploadToDrive(drive, nomineePic, folderId)
    }

    // Write to sheet
    const TAB = "Nominations"
    const headerRange = `${TAB}!A1:X1`
    const dataRange = `${TAB}!A:X`

    const existing = await sheets.spreadsheets.values.get({
      spreadsheetId: sheetId,
      range: headerRange,
    })

    if (!existing.data.values?.length) {
      await sheets.spreadsheets.values.update({
        spreadsheetId: sheetId,
        range: headerRange,
        valueInputOption: "USER_ENTERED",
        requestBody: { values: [SHEET_HEADERS] },
      })
    }

    const row = [
      new Date().toLocaleString("en-NG", { timeZone: "Africa/Lagos" }),
      get("nominatingType"),
      get("nominatorName"),
      get("nominatorPhone"),
      get("relationship"),
      nomineeName,
      get("nomineeOrg"),
      get("nomineeRole"),
      get("nomineeState"),
      get("nomineeEmail"),
      get("nomineePhone"),
      get("yearsActive"),
      get("flagshipCategories"),
      get("specialCategories"),
      get("strongestCategory"),
      get("impact"),
      get("links"),
      supportingDocUrls.join("\n"),
      nomineePicUrl,
      get("confirmAccuracy") === "true" ? "Yes" : "No",
      get("confirmConsent") === "true" ? "Yes" : "No",
      get("extraNotes"),
      get("howHeard"),
      "Pending Review",
    ]

    await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: dataRange,
      valueInputOption: "USER_ENTERED",
      requestBody: { values: [row] },
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("Nomination error:", err)
    return NextResponse.json({ error: "Failed to save nomination" }, { status: 500 })
  }
}
