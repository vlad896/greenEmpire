'use client'

import { Typography } from '@material-tailwind/react'
function HeroPages() {
  return (
    <div
      className={`relative min-h-screen w-full bg-[url(/assets/it-ChooseUs/2148890074.jpg)] bg-cover bg-no-repeat`}
    >
      <div className="absolute inset-0 h-full w-full bg-gray-900/75" />
      <div className="grid min-h-screen px-8">
        <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
          <Typography variant="h1" color="white">
            О нашей компании
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
        </div>
      </div>
    </div>
  )
}
export default HeroPages
