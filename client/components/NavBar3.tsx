import {
  Bars4Icon,
  ChevronDownIcon,
  GlobeAmericasIcon,
  SquaresPlusIcon,
  SunIcon,
  UserGroupIcon,
} from '@heroicons/react/20/solid'
import {
  Button,
  Collapse,
  Drawer,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography,
} from '@material-tailwind/react'
import Link from 'next/link'
import React from 'react'

export function NavBar3() {
  const [open, setOpen] = React.useState(false)

  const openDrawer = () => setOpen(true)
  const closeDrawer = () => setOpen(false)

  return (
    <div>
      <Button onClick={openDrawer}>Open Drawer</Button>
      <Drawer open={open} onClose={closeDrawer} className="p-4">
        <div className="mb-6 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray">
            Material Tailwind
          </Typography>
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <Typography color="gray" className="mb-8 pr-4 font-normal">
          Material Tailwind features multiple React and HTML components, all
          written with Tailwind CSS classes and Material Design guidelines.
        </Typography>
        <div className="flex gap-2">
          <Button size="sm" variant="outlined">
            Documentation
          </Button>
          <Button size="sm">Get Started</Button>
        </div>
      </Drawer>
    </div>
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
      <Link href="#" key={key}>
        <MenuItem className="flex items-center gap-3 rounded-lg">
          <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
            {' '}
            {React.createElement(icon, {
              strokeWidth: 2,
              className: 'h-6 text-gray-900 w-6',
            })}
          </div>
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm font-bold"
            >
              {title}
            </Typography>
            <Typography
              variant="paragraph"
              className="text-xs !font-medium text-blue-gray-500"
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
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
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
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  )
}

export const LinksSection = [
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

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1 m-0">
      {LinksSection.map((items, index) => (
        <Typography
          as="a"
          key={index}
          href={items.link}
          variant="small"
          color="blue-gray"
          className="font-medium"
        >
          <ListItem className="flex items-center gap-2 py-2 pr-4">
            {items.title}
          </ListItem>
        </Typography>
      ))}
      <NavListMenu />
    </List>
  )
}
