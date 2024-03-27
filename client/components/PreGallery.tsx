import { motion } from 'framer-motion'
import Link from 'next/link'
import Gallery1 from './Gallery'
export const ANALITIC = [
  {
    image: '/assets/analitic/top-view-workmates-talking-about-bar-chart.webp',
    alt: 'ff1',
    h2: 'Анализ компании',
    href: 'companyAnalysis',
  },
  {
    image: '/assets/analitic/close-up-glasses-annual-summary.webp',
    alt: 'Анализ рынка',
    h2: 'Анализ рынка',
    href: 'marketAnalysis',
  },
  {
    image: '/assets/analitic/close-up-financial-document-table.webp',
    alt: 'Анализ конкурентов',
    h2: 'Анализ конкурентов',
    href: 'competitorAnalysis',
  },
  {
    image: '/assets/analitic/individuality-concept-silhouettes.webp',
    alt: 'Анализ целевой аудитории',
    h2: 'Анализ целевой аудитории',
    href: 'targetAudienceAnalysis',
  },
]
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
    <div style={{ overflow: 'hidden' }} className="pb-12 bg-white">
      <motion.h2
        custom={1}
        variants={featureAnimation}
        className="text-[--text-primary] text-3xl text-center font-semibold mb-8 mt-8 lg:text-4xl"
      >
        Наши услуги
      </motion.h2>
      <div className="mx-auto px-8 sm:px-6 lg:py-0 md:px-8 xl:px-28 2xl:px-48">
        <div className="grid grid-cols-2 gap-y-5 gap-x-6 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {ANALITIC.map((items, index) => (
            <Link href={`/analitic/${items.href}`} key={index}>
              <Gallery1
                index={index}
                href={items.image}
                alt={items.alt}
                h2={items.h2}
              />
            </Link>
          ))}
        </div>
      </div>
      {/* <motion.div
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
      </motion.div> */}
    </div>
  )
}

export default PreGallery
