import MessageUsEmail from '@/components/EmailMessage'
import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  const { name, phone, surname, email, message, service } = await req.json()

  try {
    const data = await resend.emails.send({
      from: 'fedarovichuladzislau@wm-empire.by', // your verified domain
      to: 'fedarovichuladzislau@gmail.com', // the email address you want to send a message
      subject: `WebMarketing Empire`,
      react: MessageUsEmail({ name, phone, surname, email, message, service }),
    })

    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error })
  }
}
