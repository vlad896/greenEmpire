import { Typography } from '@material-tailwind/react'
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/effect-creative'
import 'swiper/css/navigation'
import { EffectCreative, Keyboard, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { DialogButton } from './DialogButton'
import NavBar2 from './NavBar2'
const DATA = [
  {
    src: '/assets/it/1.jpg',
    alt: '',
    h1: 'Аналитика в маркетинге ключ к успеху вашего бизнеса',
    h2: 'В современном мире информация - это золото. Аналитика в маркетинге играет важную роль в формировании стратегии бизнеса, позволяя компаниям принимать обоснованные решения и достигать своих целей.',
  },
  {
    src: '/assets/it/2.jpg',
    alt: '',
    h1: 'Разработка лендинга',
    h2: 'Ключевой элемент успешной маркетинговой стратегии любого бизнеса, цель которого – привлечение внимания потенциальных клиентов и стимулирование их к действию: подписке, покупке, регистрации или запросу информации.',
  },
  {
    src: '/assets/it/3.jpg',
    alt: '',
    h1: 'We are Creative Digital Agency That Help You to Business',
    h2: 'It is not so much for its beauty that the forest makes a claim upon men&apos;s hearts, as for that subtle something, that quality of air that emanation from old trees, that sowonderfully changes and renews a weary spirit3.',
  },
]

const New = () => {
  return (
    <>
      {/* <MegaMenuWithHover /> */}

      <NavBar2 />
      {/* <Banner /> */}

      {/* <Navbar /> */}

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
                <div className="container relative z-10 my-auto mx-auto grid place-items-center sm:place-items-start sm:pl-12">
                  <Typography
                    variant="h1"
                    color="white"
                    className="text-xl text-center sm:text-start  mb-6 md:mb-3 xl:mb-10  md:max-w-full xl:text-6xl xl:max-w-6xl  2xl:text-7xl"
                  >
                    {img.h1}
                  </Typography>
                  <Typography
                    color="white"
                    className="mt-4 text-sm max-w-xs mb-6 xl:mb-10   md:text-lg md:max-w-full lg:max-w-3xl"
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
