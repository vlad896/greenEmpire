import { Button, Typography } from '@material-tailwind/react'
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/effect-creative'
import 'swiper/css/navigation'
import { EffectCreative, Keyboard, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import Banner from './Banner'
import { MegaMenuWithHover } from './NavListMenu'
const DATA = [
  {
    src: '/assets/it/1.jpg',
    alt: '',
    h1: 'We are Creative Digital Agency That Help You to Business',
    h2: 'It is not so much for its beauty that the forest makes a claim upon men&apos;s hearts, as for that subtle something, that quality of air that emanation from old trees, that sowonderfully changes and renews a weary spirit1 It is not so much for its beauty that the forest makes a claim upon men&apos;s hearts, as for that subtle something, that quality of air that emanation from old trees, that sowonderfully changes and renews a weary spirit1.',
  },
  {
    src: '/assets/it/2.jpg',
    alt: '',
    h1: 'We are Creative Digital Agency That Help You to Business',
    h2: 'It is not so much for its beauty that the forest makes a claim upon men&apos;s hearts, as for that subtle something, that quality of air that emanation from old trees, that sowonderfully changes and renews a weary spirit2.',
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
      <MegaMenuWithHover />
      <Banner />
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
        className="h-screen"
      >
        {DATA.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full">
              <Image src={img.src} alt={img.alt} loading="lazy" layout="fill" />
              <div className="absolute inset-0 grid h-full w-full place-items-center bg-[#000a40]/80">
                <div className="w-3/4">
                  <Typography
                    variant="h1"
                    className="mb-12 text-[50px] font-semibold md:text-4xl lg:text-8xl w-[1300px] text-white"
                  >
                    {img.h1}
                  </Typography>
                  <Typography
                    variant="lead"
                    className="mb-12 opacity-80 w-[700px] text-white"
                  >
                    {img.h2}
                  </Typography>
                  <Button
                    size="lg"
                    className="bg-white font-bold mb-20 text-[#0027FE] px-4 py-3 rounded-3xl"
                    style={{ fontWeight: 'bolder' }}
                  >
                    Start Work With Us
                  </Button>
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
