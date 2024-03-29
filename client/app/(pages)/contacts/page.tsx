'use client'

import CTA from '@/components/CTA'
import Contact from '@/components/Contact'
import HeroPages4 from '@/components/HeroPages4'
import { Typography } from '@material-tailwind/react'
import Image from 'next/image'

const Contacts = () => {
  return (
    <>
      <HeroPages4
        button="Подробнее"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            repellat delectus adipisci maxime ex consequuntur qui harum
            reiciendis quas distinctio. Quas aspernatur possimus dignissimos
            voluptates reiciendis facere quo in. Vel?"
        icon="/assets/it-ChooseUs/close-up-side-view-smiling-businessman-eyeglasses.webp"
        title="Наши контакты"
      />
      <div className="py-2" id="contacts">
        <div className="mx-auto grid  items-center justify-items-center mr-16 mt-6 sm:px-6 lg:grid-cols-2 lg:gap-x-30 lg:px-14">
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
          <div className="flex flex-col gap-3 lg:col-span-1">
            <Typography variant="h1" className="mb-3">
              Связаться с нами
            </Typography>
            <Typography variant="lead">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque et
              maxime at illum est libero cumque id quibusdam aliquam autem
              labore ut magnam, nihil necessitatibus aspernatur voluptas
              exercitationem, accusamus sed. Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Commodi dolorem sint earum
              possimus, officia veritatis libero, eius porro deleniti
              perspiciatis magni aut voluptas optio odio tempora, deserunt harum
              aliquam quaerat!
            </Typography>
          </div>
        </div>
        <CTA />
        <Contact />
      </div>
    </>
  )
}

export default Contacts
