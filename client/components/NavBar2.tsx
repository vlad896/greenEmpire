import {
  Bars3Icon,
  Bars4Icon,
  ChevronDownIcon,
  GlobeAmericasIcon,
  SquaresPlusIcon,
  SunIcon,
  UserGroupIcon,
  XMarkIcon,
} from '@heroicons/react/20/solid'
import {
  Collapse,
  IconButton,
  ListItem,
  Navbar as MTNavbar,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography,
} from '@material-tailwind/react'
import Link from 'next/link'
import React from 'react'
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaVk,
} from 'react-icons/fa'

interface NavItemProps {
  children: React.ReactNode
  href?: string
}
function NavItem({ children, href }: NavItemProps) {
  return (
    <li>
      <Typography as="a" href={href || '#'} className="font-medium">
        {children}
      </Typography>
    </li>
  )
}

const navListMenuItems = [
  {
    title: 'Аналитика',
    description: 'Find the perfect solution for your needs.',
    icon: SquaresPlusIcon,
  },
  {
    title: 'Стратегия',
    description: 'Meet and learn about our dedication',
    icon: UserGroupIcon,
  },
  {
    title: 'Дизайн',
    description: 'Find the perfect solution for your needs.',
    icon: Bars4Icon,
  },
  {
    title: 'Разработка сайта',
    description: 'Learn how we can help you achieve your goals.',
    icon: SunIcon,
  },
  {
    title: 'SMM',
    description: 'Reach out to us for assistance or inquiries',
    icon: GlobeAmericasIcon,
  },
]

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const renderItems = navListMenuItems.map(
    ({ icon, title, description }, key) => (
      <Link href={'/'} key={key}>
        <MenuItem className="flex items-center gap-3 rounded-lg ">
          <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2  ">
            {' '}
            {React.createElement(icon, {
              strokeWidth: 2,
              className: 'h-6 text-gray-900 w-6',
            })}
          </div>
          <div className="">
            <Typography
              variant="paragraph"
              className="flex items-center text-base font-bold"
            >
              {title}
            </Typography>
            <Typography
              variant="paragraph"
              className="text-xs !font-medium  text-blue-gray-500"
            >
              {description}
            </Typography>
          </div>
        </MenuItem>
      </Link>
    )
  )

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="paragraph" className="font-semibold">
            <ListItem
              className="flex items-center transition-none gap-2 text-base font-medium p-0"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
              style={{
                backgroundColor: 'transparent',
                color: 'inherit',
                textDecoration: 'none',
                outline: 'none',
                border: 'none',
              }}
            >
              Услуги
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? 'rotate-180' : ''
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? 'rotate-180' : ''
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden  max-w-screen-xl rounded-xl lg:block">
          <ul className="grid  grid-cols-3 gap-y-2 ">{renderItems}</ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden ">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  )
}
export function NavBar2() {
  const [open, setOpen] = React.useState(false)
  const [isScrolling, setIsScrolling] = React.useState(false)

  function handleOpen() {
    setOpen((cur) => !cur)
  }

  React.useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpen(false)
    )
  }, [])

  React.useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolling(true)
      } else {
        setIsScrolling(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  const LinksSection = [
    {
      title: 'Главная',
      link: '/',
    },
    {
      title: 'О нас',
      link: '/aboutUs',
    },
    {
      title: 'Контакты',
      link: '/contacts',
    },
    {
      title: 'Наши работы',
      link: '/portfolio',
    },

    {
      title: 'Статьи',
      link: '/articles',
    },
  ]
  return (
    <MTNavbar
      fullWidth
      shadow={false}
      blurred={false}
      color={isScrolling ? 'white' : 'transparent'}
      className="fixed top-0 z-50 border-0 p-5"
    >
      <div className="container mx-auto flex items-center justify-between">
        <Typography
          as="a"
          href="/"
          variant="h6"
          color={isScrolling ? 'gray' : 'white'}
        >
          WebMarketingEmpire
        </Typography>
        <ul
          className={`ml-10 hidden items-center gap-6 lg:flex ${
            isScrolling ? 'text-gray-900' : 'text-white'
          }`}
        >
          {LinksSection.map((link, index) => (
            <NavItem key={index} href={link.link}>
              {link.title}
            </NavItem>
          ))}
          <NavListMenu />
        </ul>
        <div className="hidden gap-4 lg:flex lg:items-center lg:h-fit">
          <Link href={'/'}>
            <FaVk color={isScrolling ? 'gray' : 'white'} size={23} />
          </Link>
          <Link href={'/'}>
            <FaLinkedin color={isScrolling ? 'gray' : 'white'} size={23} />
          </Link>
          <Link href={'/'}>
            <FaTwitter color={isScrolling ? 'gray' : 'white'} size={23} />
          </Link>
          <Link href={'/'}>
            <FaFacebook color={isScrolling ? 'gray' : 'white'} size={23} />
          </Link>
          <Link href={'/'}>
            <FaInstagram color={isScrolling ? 'gray' : 'white'} size={23} />
          </Link>
        </div>
        <IconButton
          variant="text"
          color={isScrolling ? 'gray' : 'white'}
          onClick={handleOpen}
          className=" inline-block lg:hidden"
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>

      <Collapse open={open}>
        <div className="container mx-auto mt-4 rounded-lg border-t border-blue-gray-50 bg-white px-6 py-5">
          <ul className="flex flex-col gap-4 text-blue-gray-900">
            {LinksSection.map((link, index) => (
              <NavItem key={index} href={link.link}>
                {link.title}
              </NavItem>
            ))}
            <NavListMenu />
          </ul>
          <div className="mt-4 flex items-center gap-2">
            <Link href={'/'}>
              <FaVk color={isScrolling ? 'gray' : 'gray'} size={23} />
            </Link>
            <Link href={'/'}>
              <FaLinkedin color={isScrolling ? 'gray' : 'gray'} size={23} />
            </Link>
            <Link href={'/'}>
              <FaTwitter color={isScrolling ? 'gray' : 'gray'} size={23} />
            </Link>
            <Link href={'/'}>
              <FaFacebook color={isScrolling ? 'gray' : 'gray'} size={23} />
            </Link>
            <Link href={'/'}>
              <FaInstagram color={isScrolling ? 'gray' : 'gray'} size={23} />
            </Link>
          </div>
        </div>
      </Collapse>
    </MTNavbar>
  )
}

export default NavBar2
