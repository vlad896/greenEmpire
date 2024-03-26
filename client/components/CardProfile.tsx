import { motion } from 'framer-motion'

function CardProfile({ text, index }: { text: string; index: number }) {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <div>ffd</div>
      <motion.div
        className={`bg-red-700 h-[50vh] w-[50vw] border  flex flex-col ${
          index % 2 === 0 ? 'self-end' : ''
        }`}
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
      >
        <p className="card-text text-white text-4xl">{text}</p>
      </motion.div>
    </div>
  )
}

export default CardProfile
