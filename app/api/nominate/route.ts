import { google } from "googleapis"
import { v2 as cloudinary } from "cloudinary"
import { NextResponse } from "next/server"

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

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
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  })
}

async function uploadToCloudinary(file: File, folder: string): Promise<string> {
  const buffer = Buffer.from(await file.arrayBuffer())
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder, resource_type: "auto" },
      (err, result) => {
        if (err || !result) return reject(err ?? new Error("Cloudinary upload failed"))
        resolve(result.secure_url)
      }
    )
    stream.end(buffer)
  })
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const get = (key: string) => (formData.get(key) as string) ?? ""

    const auth = getAuth()
    const sheets = google.sheets({ version: "v4", auth })
    const sheetId = process.env.GOOGLE_NOMINATIONS_SHEET_ID ?? process.env.GOOGLE_SHEET_ID

    if (!sheetId) {
      return NextResponse.json({ error: "Sheet not configured" }, { status: 500 })
    }

    const nomineeName = get("nomineeName")
    const cloudinaryFolder = `ncs-nominations/${nomineeName || "nominee"}`

    // Upload supporting documents
    const supportingDocFiles = formData.getAll("supportingDocs") as File[]
    const supportingDocUrls: string[] = []
    for (const file of supportingDocFiles) {
      if (file.size > 0) {
        const url = await uploadToCloudinary(file, cloudinaryFolder)
        supportingDocUrls.push(url)
      }
    }

    // Upload nominee photo
    const nomineePic = formData.get("nomineePic") as File | null
    let nomineePicUrl = ""
    if (nomineePic && nomineePic.size > 0) {
      nomineePicUrl = await uploadToCloudinary(nomineePic, cloudinaryFolder)
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
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const details = (err as any)?.response?.data ?? null
    console.error("Nomination error:", err)
    return NextResponse.json({ error: message, details }, { status: 500 })
  }
}
