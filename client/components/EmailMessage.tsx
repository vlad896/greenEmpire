import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Tailwind,
  Text,
} from '@react-email/components'

type MessageUsEmailProps = {
  name: string
  surname: string
  phone: string
  message: string
  email: string
  service: string
}

const MessageUsEmail = ({
  name,
  phone,
  surname,
  email,
  message,
  service,
}: MessageUsEmailProps) => {
  const previewText = `ЗАКАЗ НА САЙТЕ WM Empire! СРОЧНО!`

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans">
          <Container className="my-[20px] mx-auto p-[20px] max-w-4xl">
            <Heading className="text-black text-[20px] font-normal text-left">
              ПЕРЕЗВОНИТЬ!
            </Heading>
            <Text className="text-black text-[14px] leading-[24px]">
              Services - {service}
              <br />
              Surname - {surname}
              <br />
              Name - {name}
              <br />
              Email - {email}
              <br />
              Phone - {phone}
              <br />
              Message - {message}
              <br />
            </Text>

            <Hr className="my-[16px] mx-0 w-full" />
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

export default MessageUsEmail
