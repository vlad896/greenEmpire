'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: '-100%' },
}
const LinksSection = [
  {
    title: 'Услуги',
    link: '/services',
  },
  {
    title: 'Портфолио',
    link: '/portfolio',
  },
  {
    title: 'О нас',
    link: '/aboutUs',
  },
  {
    title: 'Статьи',
    link: '/articles',
  },
  { title: 'Контакты', link: '/contacts' },
]

const Navbar = ({ style }: { style?: string }) => {
  const [open, setOpen] = useState(false)

  const handleMenu = () => {
    setOpen((prev) => !prev)
  }

  return (
    <div>
      <div className="mx-auto px-96">
        <div className="flex items-center justify-between h-16">
          {/* <div className="hidden lg:flex items-center text-[--text-primary]">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <a
                href="tel:+375447073636"
                className="transition-all duration-500 rounded-lg text-[#0027FE] font-bold"
              >
                +375 (44) 707-36-36
              </a>
            </motion.div>
          </div> */}

          <div className="right-1/2">
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
              <p className="transition-all duration-500 rounded-lg text-[#0027FE] text-2xl font-bold">
                Green empire
              </p>
            </motion.div>
          </div>
          <div className="hidden md:block">
            <div className="flex items-baseline gap-5">
              {LinksSection.map((link, index) => (
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <a
                    key={index}
                    className="text-[--text-primary]  font-semibold transition-all duration-500 rounded-md text-xl hover:text-[#0027FE]"
                    href={link.link}
                  >
                    {link.title}
                  </a>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              onClick={handleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {open == true ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>
      <motion.nav animate={open ? 'open' : 'closed'} variants={variants}>
        {open ? (
          <div className="md:hidden">
            <div className="bg-[--bg-primary] ox-2 pt-2 pb-3 space-y-1  sm:px-3">
              {LinksSection.map((link, index) => (
                <a
                  key={index}
                  onClick={() => setOpen(false)}
                  className=" text-[--text-primary] hover:bg-[--bg-primary] hover:text-white block px-3 py-2 rounded-md text-base "
                  href={link.link}
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div>
        ) : null}
      </motion.nav>
    </div>
  )
}

export default Navbar
