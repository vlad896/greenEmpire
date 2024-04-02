import { Typography } from '@material-tailwind/react'
import Image from 'next/image'
import OrderForm from './OrderForm'

const Contact = () => {
  return (
    <section className="px-8 py-8 lg:py-16">
      <div className="container mx-auto text-center">
        <Typography
          variant="paragraph"
          color="blue-gray"
          className="mb-4 !text-base lg:!text-2xl"
        >
          Забота о клиентах
        </Typography>
        <Typography
          variant="paragraph"
          color="blue-gray"
          className="mb-4 !text-3xl lg:!text-5xl"
        >
          Мы готовы помочь
        </Typography>
        <Typography className="mb-10 font-normal !text-lg lg:mb-20 mx-auto max-w-3xl !text-gray-500">
          Если вы хотите задать вопрос о наших услугах, попросить технической
          помощи или предложения по улучшению, наша команда с радостью выслушает
          вас.
        </Typography>
        <div className="grid grid-cols-1 gap-x-12 gap-y-6 lg:grid-cols-2 items-start">
          <Image
            src="/assets/it-ChooseUs/map.png"
            alt="map"
            width={500}
            height={500}
            className="w-full h-full lg:max-h-[510px]"
          />
          <OrderForm />
        </div>
      </div>
    </section>
  )
}

export default Contact
