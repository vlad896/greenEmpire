import MessageUsEmail from '@/components/EmailMessage'
import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  const { name, phone } = await req.json()

  try {
    const data = await resend.emails.send({
      from: 'fedarovichuladzislau@antresol.org', // your verified domain
      to: 'fedarovichuladzislau@gmail.com', // the email address you want to send a message
      subject: `ANTRESOL.ORG`,
      react: MessageUsEmail({ name, phone }),
    })

    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error })
  }
}
