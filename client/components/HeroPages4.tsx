'use client'

import { Typography } from '@material-tailwind/react'

import '@/app/globals.css'
const HeroPages4 = ({
  title,
  desc,
  icon = '/assets/analitic/standard-quality-control-concept-m.webp',
}: {
  title?: string
  desc?: string
  icon?: string
}) => {
  return (
    <div
      style={{ backgroundImage: `url(${icon})` }}
      className={`relative min-h-screen w-full bg-[image:var(--image-url)] bg-cover bg-no-repeat`}
    >
      <div className="absolute inset-0 h-full w-full bg-gray-900/75" />
      <div className="grid min-h-screen px-8">
        <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
          <Typography
            variant="h1"
            className="text-4xl sm:text-5xl"
            color="white"
          >
            {title}
          </Typography>
          <Typography
            variant="lead"
            color="white"
            className="mt-7 mb-5 w-full md:max-w-full lg:max-w-3xl"
          >
            {desc}
          </Typography>
        </div>
      </div>
    </div>
  )
}
export default HeroPages4
