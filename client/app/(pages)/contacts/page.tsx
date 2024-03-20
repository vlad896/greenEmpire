'use client'

import CTA from '@/components/CTA'
import Contact from '@/components/Contact'
import { Button, Typography } from '@material-tailwind/react'
import Image from 'next/image'
const Contacts = () => {
  return (
    <div className="">
      <div className="items-center justify-items-center  mt-6 ml-4 sm:px-6 lg:grid  lg:grid-cols-2 lg:gap-x-30 lg:px-14">
        <div className="flex flex-col gap-3">
          <Typography variant="h1" className="mb-3">
            Связаться с нами
          </Typography>
          <Typography variant="lead">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque et
            maxime at illum est libero cumque id quibusdam aliquam autem labore
            ut magnam, nihil necessitatibus aspernatur voluptas exercitationem,
            accusamus sed. Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Commodi dolorem sint earum possimus, officia veritatis libero,
            eius porro deleniti perspiciatis magni aut voluptas optio odio
            tempora, deserunt harum aliquam quaerat!
          </Typography>
          <Button className="w-36" variant="filled" size="md" color="indigo">
            Подробнее
          </Button>
        </div>
        <div className="">
          <Image
            loading="lazy"
            width={510}
            height={320}
            src="/assets/it-ChooseUs/contact.png"
            alt="Model wearing plain white basic tee."
            className="object-cover object-center"
          />
        </div>
      </div>
      <CTA />
      <Contact />
    </div>
  )
}

export default Contacts
