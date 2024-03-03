'use client'
import { motion } from 'framer-motion'
import { MButton } from './Button'
import Navbar from './Navbar'

const textAnimation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: (custom: number) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.1 },
  }),
}

const Header = () => {
  return (
    <>
      <Navbar />
      <motion.div
        key="headerMotion"
        initial="hidden"
        whileInView={'visible'}
        className="flex flex-col items-center justify-center grow"
      >
        <div className="flex flex-col items-center justify-center gap-5">
          <motion.h1
            custom={0.5}
            variants={textAnimation}
            className="flex justify-center text-5xl text-[44px] font-semibold sm:text-7xl md:text-[80px] lg:text-[100px] xl:text-[110px] 2xl:text-[120px]"
          >
            <span className="text-center">ЗЕЛЕНАЯ ИМПЕРИЯ</span>
          </motion.h1>
          <motion.h2
            custom={1}
            variants={textAnimation}
            className="text-lg text-[17px] text-center font-semibold sm:text-2xl xl:text-3xl"
          >
            Сила природы в каждом ростке!
          </motion.h2>
        </div>

        <motion.div custom={2} variants={textAnimation}>
          <MButton />
        </motion.div>
      </motion.div>
    </>
  )
}

export default Header
