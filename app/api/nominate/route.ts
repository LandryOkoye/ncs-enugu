import { google } from "googleapis"
import { NextResponse } from "next/server"

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
  "Supporting Docs Count",
  "Supporting Doc Names",
  "Nominee Photo Name",
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

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const auth = getAuth()
    const sheets = google.sheets({ version: "v4", auth })
    const sheetId = process.env.GOOGLE_NOMINATIONS_SHEET_ID ?? process.env.GOOGLE_SHEET_ID

    if (!sheetId) {
      return NextResponse.json({ error: "Sheet not configured" }, { status: 500 })
    }

    const TAB = "Nominations"
    const headerRange = `${TAB}!A1:Y1`
    const dataRange = `${TAB}!A:Y`

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
      body.nominatingType ?? "",
      body.nominatorName ?? "",
      body.nominatorPhone ?? "",
      body.relationship ?? "",
      body.nomineeName ?? "",
      body.nomineeOrg ?? "",
      body.nomineeRole ?? "",
      body.nomineeState ?? "",
      body.nomineeEmail ?? "",
      body.nomineePhone ?? "",
      body.yearsActive ?? "",
      body.flagshipCategories ?? "",
      body.specialCategories ?? "",
      body.strongestCategory ?? "",
      body.impact ?? "",
      body.links ?? "",
      body.supportingDocsCount ?? 0,
      body.supportingDocNames ?? "",
      body.nomineePicName ?? "",
      body.confirmAccuracy ? "Yes" : "No",
      body.confirmConsent ? "Yes" : "No",
      body.extraNotes ?? "",
      body.howHeard ?? "",
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
