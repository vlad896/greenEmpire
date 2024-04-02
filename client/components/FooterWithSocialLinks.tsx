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
    title: 'Аналитика',
    href: '/services/analitic',
    items: [
      {
        subTitle: 'Анализ компании',
        href: '/services/analitic/companyAnalysis',
      },
      { subTitle: 'Анализ рынка', href: '/services/analitic/marketAnalysis' },
      {
        subTitle: 'Анализ конкурентов',
        href: '/services/analitic/competitorAnalysis',
      },
      {
        subTitle: 'Анализ аудитории',
        href: '/services/analitic/targetAudienceAnalysis',
      },
    ],
  },

  {
    title: 'Дизайн',
    href: '/services/design',
    items: [
      {
        subTitle: 'Дизайн печатной подукции',
        href: '/services/design/designProducts',
      },
      {
        subTitle: 'Разработка логотипа',
        href: '/services/design/logoDevelopment',
      },
      {
        subTitle: 'Разработка брендбука',
        href: '/services/design/brandbookDevelopment',
      },
      {
        subTitle: 'Web-дизайн',
        href: '/services/design/webDesign',
      },
    ],
  },
  {
    title: 'Разработка сайтов',
    href: '/services/development',
    items: [
      {
        subTitle: 'Landing page',
        href: '/services/development/landingPage',
      },
      {
        subTitle: 'SEO',
        href: '/services/development/SEO',
      },
      {
        subTitle: 'Контекстная реклама',
        href: '/services/development/contextualAdvertising',
      },
    ],
  },
  {
    title: 'SMM',
    href: '/services/smm',
    items: [
      {
        subTitle: 'Продвижение бренда',
        href: '/services/smm/brandPromotion',
      },
    ],
  },
  {
    title: 'Стратегия',
    href: '/services/strategy',
    items: [
      {
        subTitle: 'Разработка маркетинговой стратегии',
        href: '/services/strategy/marketingStrategy',
      },
    ],
  },
]

const currentYear = new Date().getFullYear()

const FooterWithSocialLinks = () => {
  return (
    <footer className="relative w-full pt-14">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
          <Typography variant="h5" className="mb-6">
            <Link href={'/'}>WebMarketingEmpire</Link>
          </Typography>

          <div className="grid grid-cols-3 justify-between gap-4">
            {LINKS.map(({ title, items, href }) => (
              <ul key={title}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-3 font-medium opacity-40"
                >
                  <Link href={href}>{title}</Link>
                </Typography>
                {items.map((link, index) => (
                  <li key={index}>
                    <Typography
                      as="a"
                      href={link.href}
                      color="gray"
                      className="py-1.5 font-normal transition-colors hover:text-blue-gray-900"
                    >
                      {link.subTitle}
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
            &copy; {currentYear} <Link href="/">WebMarketingEmpire</Link>. Все
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
export default FooterWithSocialLinks
