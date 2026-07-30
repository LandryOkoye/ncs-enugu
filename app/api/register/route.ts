import { google } from "googleapis"
import { NextResponse } from "next/server"

const SHEET_HEADERS = [
  "Timestamp",
  "Full Name",
  "Email",
  "Phone",
  "Gender",
  "Age Range",
  "State of Residence",
  "Organisation",
  "Job Title",
  "Industry",
  "Years of Experience",
  "Attendee Category",
  "LinkedIn",
  "Website",
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
    const sheetId = process.env.GOOGLE_SHEET_ID

    if (!sheetId) {
      return NextResponse.json({ error: "Sheet not configured" }, { status: 500 })
    }

    // Ensure header row exists on first use
    const existing = await sheets.spreadsheets.values.get({
      spreadsheetId: sheetId,
      range: "Sheet1!A1:P1",
    })

    if (!existing.data.values?.length) {
      await sheets.spreadsheets.values.update({
        spreadsheetId: sheetId,
        range: "Sheet1!A1:P1",
        valueInputOption: "USER_ENTERED",
        requestBody: { values: [SHEET_HEADERS] },
      })
    }

    const row = [
      new Date().toLocaleString("en-NG", { timeZone: "Africa/Lagos" }),
      body.fullName ?? "",
      body.email ?? "",
      body.phone ?? "",
      body.gender ?? "",
      body.ageRange ?? "",
      body.state ?? "",
      body.organisation ?? "",
      body.jobTitle ?? "",
      body.industry ?? "",
      body.experience ?? "",
      body.attendeeCategory ?? "",
      body.linkedin ?? "",
      body.website ?? "",
      body.source ?? "",
      "Pending",
    ]

    await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: "Sheet1!A:P",
      valueInputOption: "USER_ENTERED",
      requestBody: { values: [row] },
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("Registration error:", err)
    return NextResponse.json({ error: "Failed to save registration" }, { status: 500 })
  }
}
