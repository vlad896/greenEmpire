'use client'
import { Navigation, Pagination, Scrollbar } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

interface Props {
  videos: string
}
const youtubeOpts = {
  height: '390',
  width: '540',

  playerVars: {
    autoplay: 0,
    volume: 0,
  },
}
const YouTubeLiteSwiper = ({ videos }: any) => {
  const onReady = (event: any) => {
    // Access the player instance
    const player = event.target
    player.setVolume(0)
    // For example, you can automatically play the video
  }

  const onError = (error: any) => {
    console.error('YouTube Player Error:', error)
  }
  return (
    <div
      className="mx-auto  px-4 py-3 sm:px-5 lg:py-0 xl:px-20  lg:px-14 bg-[--bg-color-dark]"
      role="region"
      aria-label="YouTube Video Swiper"
    >
      <Swiper
        spaceBetween={50}
        slidesPerView={2}
        className="flex items-center justify-between break-words"
        modules={[Navigation, Pagination, Scrollbar]}
        pagination={{ clickable: true }}
        navigation
        aria-live="polite"
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
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1444: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
      >
        <div className=" ">
          <div className="flex gap-7">
            {videos.map((videoId: any, index: any) => (
              <SwiperSlide key={index} style={{}}>
                <div
                  className="m-5"
                  role="group"
                  aria-label={`YouTube Video ${index + 1}`}
                >
                  <LiteYouTubeEmbed
                    id={videoId.videoID}
                    title="YouTube Video"
                    adNetwork={true}
                    noCookie={true}
                    playlistCoverId={videoId.videoID}
                  />
                </div>
              </SwiperSlide>
            ))}
          </div>
        </div>
      </Swiper>
    </div>
  )
}

export default YouTubeLiteSwiper
