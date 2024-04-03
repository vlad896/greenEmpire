import { ADVANTAGES } from '@/models/helper'
import { Typography } from '@material-tailwind/react'
import Image from 'next/image'

const Advantages = () => {
  return (
    <div className="px-6">
      <div
        className="mx-auto flex flex-col px-4 sm:px-6 lg:py-0 xl:px-6 lg:px-4 "
        style={{ overflow: 'hidden' }}
      >
        <h2 className="text-[#0027FE] text-3xl pt-24 text-center font-semibold mb-9 sm:text-3xl lg:text-4xl">
          Почему мы?
        </h2>

        <div className="grid grid-cols-1  pb-28 gap-y-8  gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-x-5">
          {ADVANTAGES.map((a, index) => (
            <div key={a.header} className="col-span-1 ">
              <div className="min-h-full  flex flex-col rounded-2xl bg-[--bg-color-light] border-blue-700 p-5 text-center shadow-2xl shadow-indigo-500/30">
                <div className="flex justify-center">
                  <Image
                    aria-hidden="true"
                    src={a.icon}
                    alt={a.alt}
                    width={85}
                    height={85}
                  />
                </div>
                <Typography
                  variant="paragraph"
                  className="text-center mb-2 text-base font-semibold  md:text-lg lg:text-xl"
                >
                  {a.header}
                </Typography>
                <Typography
                  variant="paragraph"
                  className="text-center font-normal text-sm text-[--text-primary] md:text-sm lg:text-base"
                >
                  {a.text}
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Advantages
