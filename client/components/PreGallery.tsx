import Link from 'next/link'
import Gallery1 from './Gallery'

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
        <Gallery1 index={index} href={image} alt={alt} h2={h2} />
      </Link>
    </div>
  )
}

export default PreGallery
