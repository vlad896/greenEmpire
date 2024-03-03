import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const textAnimation = {
  hidden: {
    x: -200,
    opacity: 0,
  },
  visible: (custom: number) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.1 },
  }),
}

const About = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView={'visible'}
      viewport={{ amount: 0.3, once: true }}
      style={{ overflow: 'hidden' }}
    >
      <motion.div
        custom={2}
        variants={textAnimation}
        className="flex flex-col  mx-auto sm:px-4 lg:py-9 md:px-10 xl:px-20 lg:px-12 lg:flex-row"
      >
        <div className="px-4 pt-2 flex items-center">
          <Link href={'#'} legacyBehavior>
            <Image
              src="/assets/icons/LogoAbout.webp"
              alt={'Логотип компании antresol.bel'}
              width={190}
              height={190}
              loading="lazy"
              className="bg-[#1f2122] p-7 rounded-[50px] min-w-[210px] min-h-[210px] mr-14 lg:min-w-[220px] lg:min-h-[220px] xl:min-w-[240px] xl:min-h-[240px]"
              style={{
                height: 'auto',
                width: 'auto',
                objectFit: 'cover',
              }}
            />
          </Link>
        </div>
        <div className="px-4 pt-8 flex flex-col gap-6 lg:text-justify lg:pt-0 lg:gap-4 ">
          <h1 className="text-2xl mb-6 font-bold text-[#fff] ">
            Мы — Зеленая империя, производитель микрозелени!
          </h1>
          <p className="text-base text-[--text-primary] xl:text-lg">
            Микрозелень — это молодые ростки овощей и трав, которые содержат в
            20-40 раз больше витаминов, минералов и антиоксидантов, чем взрослые
            растения, поэтому станут источником здоровья и красоты для вас и
            вашей семьи. Микрозелень можно добавлять в салаты, супы, сэндвичи,
            смузи и другие блюда, чтобы сделать их не только вкуснее, но и
            полезнее.
          </p>
          <p className="text-base text-[--text-primary] xl:text-lg">
            Мы выращиваем микрозелень, используя только натуральные семена, воду
            и свет. Никаких химикатов, удобрений и пестицидов. Наша микрозелень
            всегда свежая, ароматная и безопасная.
          </p>
          <p className="text-base text-[--text-primary] xl:text-lg">
            Мы любим нашу работу и заботимся о своих клиентах, поэтому готовы
            доставить вам микрозелень в любое удобное время и место. Вы можете
            заказать микрозелень на нашем сайте или по телефону.
          </p>
          <p className="text-base text-[--text-primary] xl:text-lg">
            Мы уверены, что микрозелень станет неотъемлемой частью вашего
            рациона и образа жизни. Попробуйте микрозелень и почувствуйте
            разницу!
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}
export default About
