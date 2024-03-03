import { IMAGES_ANTRESOL } from '@/models/helper'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { MGallery } from './Gallery'

const textAnimation = {
  hidden: {
    y: 50,
    opacity: 0,
  },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.1 },
  }),
}

const featureAnimation = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.1 },
  }),
}

const PreGallery = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView={'visible'}
      viewport={{ amount: 0.1, once: true }}
      style={{ overflow: 'hidden' }}
    >
      <motion.h2
        custom={1}
        variants={featureAnimation}
        className="text-[--text-primary] text-3xl text-center font-semibold mb-8 lg:text-4xl"
      >
        Наша продукция
      </motion.h2>
      <div className="mx-auto px-8 sm:px-6 lg:py-0 md:px-8 xl:px-28 2xl:px-48">
        <div className="grid grid-cols-2 gap-y-5 gap-x-6 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {IMAGES_ANTRESOL.map((image, index) => (
            <Link
              href={`/products/${encodeURIComponent(image.id)}`}
              key={image.id}
            >
              <MGallery
                custom={index + 1}
                variants={featureAnimation}
                id={image.id}
                href={image.href}
                name={image.name}
                alt={image.alt}
                h2={image.h2!}
              />
            </Link>
          ))}
        </div>
      </div>
      <motion.div
        initial="hidden"
        whileInView={'visible'}
        viewport={{ amount: 0.5, once: true }}
        style={{ overflow: 'hidden' }}
      >
        <motion.a
          custom={1}
          variants={textAnimation}
          className="flex justify-center  text-center mt-8 text-sm "
          href="tel:+375447073636"
        >
          <span
            className="bg-white px-10 py-3 hover:no-underline sm:block md:px-16 md:text-base md:py-5"
            style={{ overflow: 'hidden' }}
          >
            Узнать стоимость
          </span>
        </motion.a>
      </motion.div>
    </motion.div>
  )
}

export default PreGallery
