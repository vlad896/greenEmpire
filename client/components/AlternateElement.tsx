import { motion } from 'framer-motion'
import Image from 'next/image'

function AlternateElement({
  text,
  imageSrc,
  isTextOnLeft,
  index,
}: {
  text: string
  imageSrc: string
  isTextOnLeft: boolean
  index: number
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: index % 2 === 0 ? 50 : -50,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: {
          duration: 1,
        },
      }}
      viewport={{ once: true }}
      className="flex flex-col lg:flex-row items-center bg-white p-7"
    >
      {isTextOnLeft ? (
        <>
          <div className="w-full mb-5 lg:w-1/2 px-10">{text}</div>
          <div className="w-full lg:w-1/2 h-[60vh]  flex justify-center">
            <Image
              width={1520}
              height={1080}
              src={imageSrc}
              alt="Image"
              loading="lazy"
              className="object-cover"
            />
          </div>
        </>
      ) : (
        <>
          <div className="w-1/2 h-[50vh] flex justify-center">
            <Image
              width={1920}
              height={1080}
              objectFit="cover"
              src={imageSrc}
              alt="Image"
              className="object-cover object-center"
            />
          </div>
          <div className="w-1/2 px-10">{text}</div>
        </>
      )}
    </motion.div>
  )
}

export default AlternateElement
