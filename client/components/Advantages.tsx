import { ADVANTAGES } from '@/models/helper'
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
    <motion.div
      initial="hidden"
      whileInView={'visible'}
      viewport={{ amount: 0.5, once: true }}
      className="mx-auto px-4 sm:px-6 lg:py-0 xl:px-14 lg:px-12 "
      style={{ overflow: 'hidden' }}
    >
      <motion.h2
        custom={1}
        variants={textAnimation}
        className="text-[--text-primary] text-2xl text-center font-semibold mb-8 sm:text-3xl lg:text-4xl mt-9"
      >
        Почему мы?
      </motion.h2>
      <div className="grid grid-cols-2 gap-y-5 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-x-8">
        {ADVANTAGES.map((a, index) => (
          <motion.div
            key={a.header}
            custom={index + 1}
            variants={textAnimation}
            className="col-span-1"
          >
            <div className="min-h-full flex flex-col bg-[--bg-color-light] border-gray-700 p-5 text-center shadow-lg">
              <div className="flex justify-center">
                <Image
                  aria-hidden="true"
                  src={a.icon}
                  alt={''}
                  width={45}
                  height={45}
                  className="w-14 h-14 mb-3"
                />
              </div>
              <h1 className="text-center mb-2 text-base font-semibold text-[#fff] md:text-lg lg:text-xl">
                {a.header}
              </h1>
              <p className="text-center font-normal text-sm text-[--text-primary] md:text-sm lg:text-base">
                {a.text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default Advantages
