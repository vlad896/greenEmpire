import { Typography } from '@material-tailwind/react'
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/effect-creative'
import 'swiper/css/navigation'
import { EffectCreative, Keyboard, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { DialogButton } from './DialogButton'
import { NavBar2 } from './NavBar2'

const DATA = [
  {
    src: '/assets/it/1.webp',
    alt: 'Аналитика',
    h1: 'Аналитика',
    h2: 'Аналитика играет ключевую роль в понимании эффективности вашей маркетинговой стратегии и помогает вам принимать обоснованные решения на основе данных. Наша команда предлагает профессиональный анализ данных, который поможет вам лучше понять вашу аудиторию, оптимизировать ваши маркетинговые усилия и достичь ваших бизнес-целей.',
  },
  {
    src: '/assets/it/2.webp',
    alt: 'Стратегия',
    h1: 'Стратегия',
    h2: 'Стратегия - это фундаментальный план действий, направленный на достижение поставленных целей и реализацию миссии вашего бизнеса. Наша команда поможет вам разработать стратегию маркетинга, которая будет оптимально адаптирована под ваш бренд и учитывать уникальные особенности вашего рынка..',
  },
  {
    src: '/assets/it/1.webp',
    alt: 'Дизайн',
    h1: 'Дизайн',
    h2: 'Дизайн играет важную роль в создании визуальной идентичности вашего бренда и привлечении внимания вашей аудитории. Наша команда предлагает широкий спектр дизайн-услуг, которые помогут вашему бренду выделиться и оставить яркое впечатление на вашей целевой аудитории.',
  },
  {
    src: '/assets/it/2.webp',
    alt: 'Разработка сайтов',
    h1: 'Разработка сайтов',
    h2: 'Профессиональный веб-сайт является ключевым элементом успешного онлайн присутствия вашего бизнеса. Мы предлагаем полный спектр услуг по разработке сайтов, начиная от концепции и дизайна, и заканчивая развертыванием и поддержкой.',
  },
  {
    src: '/assets/it/2.webp',
    alt: 'SMM',
    h1: 'SMM',
    h2: 'SMM - это стратегия маркетинга, которая использует социальные медиа платформы для привлечения внимания к вашему бренду, взаимодействия с аудиторией и продвижения продуктов или услуг. Наша команда предлагает комплексный подход к SMM, чтобы помочь вам эффективно использовать социальные медиа для достижения ваших целей.',
  },
]

const New = () => {
  return (
    <>
      <NavBar2 />
      <Swiper
        modules={[Navigation, Keyboard, EffectCreative]}
        centeredSlides={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        slidesPerView={1}
        navigation
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ['-20%', 0, -1],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
        keyboard={{ enabled: true }}
        rewind={true}
        className="h-screen "
      >
        {DATA.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full">
              <Image
                src={img.src}
                alt={img.alt}
                loading="lazy"
                layout="fill"
                className="object-cover overflow-hidden"
              />
              <div className="absolute inset-0 grid h-full w-full  bg-[#000a40]/80">
                <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center sm:text-start sm:place-items-start sm:pl-12">
                  <Typography
                    variant="h1"
                    color="white"
                    className="text-4xl sm:text-5xl sm:text-start  mb-2 md:mb-3 xl:mb-10  md:max-w-full xl:text-6xl xl:max-w-6xl  2xl:text-7xl"
                  >
                    {img.h1}
                  </Typography>
                  <Typography
                    color="white"
                    className="mt-4 text-xl max-w-xs sm:max-w-full mb-6 xl:mb-10   md:text-2xl md:max-w-full lg:max-w-5xl"
                  >
                    {img.h2}
                  </Typography>
                  <DialogButton />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default New
