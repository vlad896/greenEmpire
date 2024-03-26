'use client'

import { Typography } from '@material-tailwind/react'

import { motion } from 'framer-motion'

import '@/app/globals.css'
function HeroPages4({
  title,
  desc,
  button,
  icon = '/assets/analitic/standard-quality-control-concept-m.webp',
}: {
  title?: string
  desc?: string
  button?: string
  icon?: string
}) {
  return (
    <div
      //   style={{ '--image-url': `url(${icons})` }}
      style={{ backgroundImage: `url(${icon})` }}
      className={`relative min-h-screen w-full bg-[image:var(--image-url)] bg-cover bg-no-repeat`}
    >
      <div className="absolute inset-0 h-full w-full bg-gray-900/75" />
      <div className="grid min-h-screen px-8">
        <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
          <Typography variant="h1" color="white">
            {title}
          </Typography>
          <Typography
            variant="lead"
            color="white"
            className="mt-4 mb-12 w-full md:max-w-full lg:max-w-3xl"
          >
            {desc}
          </Typography>

          <motion.a
            transition={{ type: 'spring', damping: 300 }}
            href={'#contacts'}
            className="bg-white px-5 py-2 rounded-2xl"
          >
            {button}
          </motion.a>
        </div>
      </div>
    </div>
  )
}
export default HeroPages4
