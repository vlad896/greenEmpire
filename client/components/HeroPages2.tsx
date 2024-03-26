'use client'

import { Typography } from '@material-tailwind/react'
import { motion } from 'framer-motion'
function HeroPages2() {
  return (
    <div
      className={`relative min-h-screen w-full bg-[url(/assets/it-ChooseUs/close-up-side-view-smiling-businessman-eyeglasses.jpg)] bg-cover bg-no-repeat`}
    >
      <div className="absolute inset-0 h-full w-full bg-gray-900/75" />
      <div className="grid min-h-screen px-8">
        <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
          <Typography variant="h1" color="white">
            Наши контакты
          </Typography>
          <Typography
            variant="lead"
            color="white"
            className="mt-4 mb-12 w-full md:max-w-full lg:max-w-3xl"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            repellat delectus adipisci maxime ex consequuntur qui harum
            reiciendis quas distinctio. Quas aspernatur possimus dignissimos
            voluptates reiciendis facere quo in. Vel?
          </Typography>

          <motion.a
            transition={{ type: 'spring', damping: 300 }}
            href={'#contacts'}
            className="bg-white px-5 py-2 rounded-2xl"
          >
            Контакты
          </motion.a>
        </div>
      </div>
    </div>
  )
}
export default HeroPages2
