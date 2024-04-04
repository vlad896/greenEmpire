import { motion } from 'framer-motion'
import Link from 'next/link'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Item } from 'react-photoswipe-gallery'

interface Props {
  image: string
  alt: string
  h2: string
  href: string
  index: number
}

const PreGallery = ({ image, alt, h2, href, index }: Props) => {
  return (
    <div style={{ overflow: 'hidden' }}>
      <Link href={`/services/${href}`} key={index}>
        <Item
          key={index}
          original={href}
          thumbnail={href}
          width={1800}
          height={2300}
        >
          {({ ref, open }) => (
            <div className="relative aspect-[15/23] grow basis-full md:basis-1/3 lg:basis-1/4">
              <motion.div
                className="h-full"
                style={{ display: 'flex' }}
                initial={{
                  opacity: 0,
                  y: 70,
                }}
                whileHover={{
                  scale: 1.1,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 2,
                  },
                }}
                viewport={{ once: true }}
              >
                <div className="relative h-full flex">
                  <LazyLoadImage
                    src={image}
                    alt={alt}
                    effect="opacity"
                    loading="lazy"
                    style={{
                      objectFit: 'cover',
                      height: '100%',
                      width: '100%',
                    }}
                  />
                </div>
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    textAlign: 'center',
                    width: '100%',
                    color: 'white',
                  }}
                >
                  <h2 className="text-xl sm:text-2xl md:text-4xl leading-normal   font-bold mb-0 pb-1">
                    {h2}
                  </h2>
                </div>
              </motion.div>
            </div>
          )}
        </Item>
      </Link>
    </div>
  )
}

export default PreGallery
