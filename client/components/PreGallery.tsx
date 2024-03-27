import Link from 'next/link'
import Gallery1 from './Gallery'

const featureAnimation = {
  //   hidden: {
  //     y: 100,
  //     opacity: 0,
  //   },
  //   visible: (custom: number) => ({
  //     y: 0,
  //     opacity: 1,
  //     transition: { delay: custom * 0.1 },
  //   }),
}

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
      {/* <motion.h2
        custom={1}
        variants={featureAnimation}
        className="text-[--text-primary] text-3xl text-center font-semibold mb-8 mt-8 lg:text-4xl"
      >
        Наши услуги
      </motion.h2> */}

      <Link href={`/services/${href}`} key={index}>
        <Gallery1 index={index} href={image} alt={alt} h2={h2} />
      </Link>
      {/* </div>
      </div> */}
    </div>
  )
}

export default PreGallery
