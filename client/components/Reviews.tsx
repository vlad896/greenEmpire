'use client'
import { Navigation, Pagination, Scrollbar } from 'swiper/modules'

import { Swiper, SwiperSlide } from 'swiper/react'
import Rating from './Rating'

// Import Swiper styles
import { motion } from 'framer-motion'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

interface Props {
  id: number
  rating: number
  name: string
  text: string
}

const textAnimation = {
  hidden: {
    x: 200,
    opacity: 0,
  },
  visible: (custom: number) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.1 },
  }),
}
const Reviews = ({ data }: { data: Props[] }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView={'visible'}
      viewport={{ amount: 0.3 }}
      style={{ overflow: 'hidden' }}
    >
      <motion.div
        custom={2}
        variants={textAnimation}
        className="mx-auto  px-4 py-3 sm:px-5 lg:py-0 xl:px-20  lg:px-14 bg-[--bg-color-dark] "
      >
        <Swiper
          spaceBetween={20}
          slidesPerView={3}
          className="flex items-center break-words"
          modules={[Navigation, Pagination, Scrollbar]}
          pagination={{ clickable: true }}
          navigation
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            480: {
              slidesPerView: 1,
              spaceBetween: 20,
            },

            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            1000: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1444: {
              width: 1444,
              slidesPerView: 3,
            },
          }}
        >
          <div className=" ">
            <div className="flex gap-7">
              {data.map((d) => (
                <SwiperSlide
                  key={d.id}
                  style={{
                    height: 'auto',
                    width: 'auto',
                    paddingLeft: 30,
                    minHeight: 400,
                  }}
                >
                  <div className="py-8">
                    <div className="flex flex-row justify-between pb-5">
                      <h1 className="text-[24px] text-white">{d.name}</h1>
                      <Rating
                        rating={d.rating}
                        keys={d.id}
                        className="flex mr-6"
                      />
                    </div>
                    <div>
                      <p className="text-base leading-7 text-[--color-p-gray] xl:text-lg">
                        {d.text}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </div>
        </Swiper>
      </motion.div>
    </motion.div>
  )
}

export default Reviews
