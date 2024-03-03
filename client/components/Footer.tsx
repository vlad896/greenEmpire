import { motion } from 'framer-motion'
import Link from 'next/link'
import CallMeForm1 from './CallMeForm1'
const textAnimation = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
}
const Footer = () => {
  return (
    <motion.footer
      initial="hidden"
      whileInView={'visible'}
      viewport={{ amount: 0.2, once: true }}
      id="contact"
      className="px-4 text-[--color-p-gray] xl:px-28 lg:px-12"
    >
      <motion.div
        custom={2}
        variants={textAnimation}
        className="flex flex-col gap-20 md:flex-row lg:gap-40 xl:gap-80  "
      >
        <CallMeForm1 />
        <div className="flex grow-0 flex-col">
          <h1 className="mb-16 text-2xl font-semibold text-white">Контакты</h1>
          <div className="flex flex-col gap-20 sm:flex-row md:flex-col lg:flex-row ">
            <div className="flex flex-col">
              <h2 className="mb-4 font-semibold text-white">Адрес</h2>
              <Link
                href="https://yandex.by/maps/-/CDFUiO3j"
                className="flex flex-col"
                target="_blank"
              >
                г. Минск, ул. Туровского, д. 16, пав. 128
              </Link>
              <Link href="mailto:greenempire.minsk@gmail.com">
                greenempire.minsk@gmail.com
              </Link>
              <a className="mt-1" href="tel:+375447073636">
                +375 (44) 707-36-36{' '}
              </a>

              <p className="mt-6">ООО "Зеленая империя"</p>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="mb-4 font-semibold text-white">Соцсети</h2>
              <Link
                href="https://www.instagram.com/greenempire.by/"
                target="_blank"
              >
                Instagram
              </Link>
              <Link href="viber://chat?number=%2B375447073636" target="_blank">
                Viber
              </Link>
            </div>
          </div>
          <div className="mt-14 w-11/12 flex-wrap">
            Обращаем внимание, что данный сайт не является интернет-магазином.
            Вся представленная информация несёт ознакомительный характер и не
            является публичной офертой. Цены и условия оплаты уточняйте по
            телефону.
          </div>
        </div>
      </motion.div>
      <hr className="mt-20" />

      <div className="mt-5 flex flex-col justify-between gap-4 sm:flex-row">
        <span>Политика конфиденциальности</span>
      </div>
    </motion.footer>
  )
}

export default Footer
