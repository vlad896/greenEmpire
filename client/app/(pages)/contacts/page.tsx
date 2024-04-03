'use client'

import Contact from '@/components/Contact'
import HeroPages4 from '@/components/HeroPages4'
import { Typography } from '@material-tailwind/react'
import Image from 'next/image'
import CTA from '../../../components/CTA'

const Contacts = () => {
  return (
    <>
      <HeroPages4
        desc="Добро пожаловать в раздел контактов WebMarketing Empire! Мы всегда рады общению с нашими клиентами, партнерами и всеми, кто интересуется нашей деятельностью."
        icon="/assets/it-ChooseUs/close-up-side-view-smiling-businessman-eyeglasses.webp"
        title="Наши контакты"
      />
      <div className="py-2" id="contacts">
        <div className="mx-7 grid  items-center justify-items-center my-6 sm:px-6 lg:grid-cols-2 lg:gap-x-30 lg:px-14">
          <div className="lg:col-span-1">
            <Image
              loading="lazy"
              width={510}
              height={320}
              src="/assets/it-ChooseUs/contact.webp"
              alt="Model wearing plain white basic tee."
              className="object-cover w-full"
            />
          </div>
          <div className="flex flex-col justify-center gap-3 lg:col-span-1">
            <Typography variant="h1" className="mb-3">
              Связаться с нами
            </Typography>
            <Typography variant="lead">
              У вас есть вопросы или предложения? Не стесняйтесь связаться с
              нами по любым вопросам, связанным с нашими продуктами, услугами
              или сотрудничеством. Наша дружелюбная команда с удовольствием
              поможет вам и предоставит всю необходимую информацию.
            </Typography>
            {/* <Typography variant="paragraph">
              У вас есть вопросы или предложения? Не стесняйтесь связаться с
             
            </Typography> */}
          </div>
        </div>
        <CTA />
        <Contact />
      </div>
    </>
  )
}

export default Contacts
