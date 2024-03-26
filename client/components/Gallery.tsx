import { motion } from 'framer-motion'
import 'photoswipe/dist/photoswipe.css'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { Item } from 'react-photoswipe-gallery'

interface Props {
  index: number
  id: string
  href: string
  name: string
  alt: string
  h2: string
}

const Gallery1 = ({ index, id, href, name, alt, h2 }: Props) => {
  return (
    <Item key={id} original={href} thumbnail={href} width={1800} height={2300}>
      {({ ref, open }) => (
        <div className="relative aspect-[18/23] grow basis-full md:basis-1/3 lg:basis-1/4">
          <motion.div
            className="h-full"
            style={{ display: 'flex' }}
            initial={{
              opacity: 0,
              y: 70,
            }}
            whileHover={{
              scale: 1.1, // увеличиваем масштаб на 10% при наведении
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
                src={href}
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
                backgroundColor: 'rgba(0, 0, 0, 0.5)', // черный цвет с прозрачностью 0.5
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: '50%', // Позиционируем по центру по вертикали
                left: '50%', // Позиционируем по центру по горизонтали
                transform: 'translate(-50%, -50%)', // Центрируем относительно родительского контейнера
                textAlign: 'center', // Выравниваем текст по центру
                width: '100%',
                color: 'white', // Цвет текста
              }}
            >
              <h2 className="text-4xl leading-normal   font-bold mb-0 pb-1">
                {h2}
              </h2>
            </div>
          </motion.div>
        </div>
      )}
    </Item>
  )
}

export default Gallery1
