'use client'

import { motion } from 'framer-motion'
import 'photoswipe/dist/photoswipe.css'
import { ForwardedRef, forwardRef } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { Item } from 'react-photoswipe-gallery'
interface Props {
  id: string
  href: string
  name: string
  alt: string
  h2: string
}

const Gallery1 = forwardRef(
  ({ id, href, name, alt, h2 }: Props, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <div ref={ref}>
        <Item
          key={id}
          original={href}
          thumbnail={href}
          width={1800}
          height={2300}
        >
          {({ ref, open }) => (
            <div className="relative aspect-[18/23] grow basis-full md:basis-1/3 lg:basis-1/4">
              <div className="h-full" style={{ display: 'flex' }}>
                <div className="  h-full relative shadow-2xl shadow-green-900 overflow-hidden group ">
                  <div className=" absolute -bottom-10 group-hover:top-0 left-0 w-full h-full group-hover:bg-green-900 transition-all ease-in-out duration-500  ">
                    <div className="w-full h-full   p-5   relative">
                      <div className="absolute bottom-0 group-hover:bottom-24 text-white  text-left   transition-all ease-in-out duration-500 ">
                        <h2 className="text-2xl font-bold  text-white mb-0 pb-1">
                          {h2}
                        </h2>
                        <p className="text-lg font-light text-white">{name}</p>
                      </div>
                    </div>
                  </div>
                  <LazyLoadImage
                    src={href}
                    alt={alt}
                    loading="lazy"
                    className="w-full z-0 h-full object-fill "
                  />
                </div>
                {/* <LazyLoadImage
                  style={{ objectFit: 'fill', height: '100%', width: '100%' }}
                  alt={image}
                  loading="lazy"
                  effect="blur"
                  src={image}
                /> */}
              </div>
            </div>
          )}
        </Item>
      </div>
    )
  }
)
export const MGallery = motion(Gallery1)
