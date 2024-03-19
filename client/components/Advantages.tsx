import { ADVANTAGES } from '@/models/helper'
import { Typography } from '@material-tailwind/react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const textAnimation = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
}

const Advantages = () => {
  return (
    <div className="px-6">
      <motion.div
        initial="hidden"
        whileInView={'visible'}
        viewport={{ amount: 0.5, once: true }}
        className="mx-auto flex flex-col px-4 sm:px-6 lg:py-0 xl:px-14 lg:px-12 "
        style={{ overflow: 'hidden' }}
      >
        <motion.h2
          custom={1}
          variants={textAnimation}
          className="text-[#0027FE] text-2xl pt-24 text-center font-semibold mb-9 sm:text-3xl lg:text-4xl"
        >
          Почему мы?
        </motion.h2>

        <div className="grid grid-cols-1  pb-28 gap-y-5 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-x-8">
          {ADVANTAGES.map((a, index) => (
            <motion.div
              key={a.header}
              custom={index + 1}
              variants={textAnimation}
              className="col-span-1 "
            >
              <div className="min-h-full  flex flex-col rounded-2xl bg-[--bg-color-light] border-blue-700 p-5 text-center shadow-2xl shadow-indigo-500/30">
                <div className="flex justify-center">
                  <Image
                    aria-hidden="true"
                    src={a.icon}
                    alt={''}
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
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default Advantages
