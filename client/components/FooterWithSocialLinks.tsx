import { Typography } from '@material-tailwind/react'
import Link from 'next/link'
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaVk,
} from 'react-icons/fa'

const ICON = [
  { icon: <FaVk />, size: 21, href: '/' },
  { icon: <FaLinkedin />, size: 21, href: '/' },

  { icon: <FaTwitter />, size: 21, href: '/' },

  { icon: <FaFacebook />, size: 21, href: '/' },

  { icon: <FaInstagram />, size: 21, href: '/' },
]

const LINKS = [
  {
    title: 'Product',
    items: ['Overview', 'Features', 'Solutions', 'Tutorials'],
  },
  {
    title: 'Company',
    items: ['About us', 'Careers', 'Press', 'News'],
  },
  {
    title: 'Resource',
    items: ['Blog', 'Newsletter', 'Events', 'Help center'],
  },
]

const currentYear = new Date().getFullYear()

export function FooterWithSocialLinks() {
  return (
    <footer className="relative w-full ">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
          <Typography variant="h5" className="mb-6">
            WebMarketingEmpire
          </Typography>
          <div className="grid grid-cols-3 justify-between gap-4">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-3 font-medium opacity-40"
                >
                  {title}
                </Typography>
                {items.map((link) => (
                  <li key={link}>
                    <Typography
                      as="a"
                      href="#"
                      color="gray"
                      className="py-1.5 font-normal transition-colors hover:text-blue-gray-900"
                    >
                      {link}
                    </Typography>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
          <Typography
            variant="small"
            className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0"
          >
            &copy; {currentYear}{' '}
            <a href="https://material-tailwind.com/">WebMarketingEmpire</a>. Все
            права защищены.
          </Typography>
          <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
            {ICON.map((items, index) => (
              <Link
                key={index}
                href={items.href}
                className="opacity-80 transition-opacity hover:opacity-100"
              >
                {items.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
