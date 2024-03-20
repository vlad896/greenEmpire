import {
  Bars3Icon,
  ChevronDownIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import {
  Bars4Icon,
  GlobeAmericasIcon,
  NewspaperIcon,
  PhoneIcon,
  RectangleGroupIcon,
  SquaresPlusIcon,
  SunIcon,
  TagIcon,
  UserGroupIcon,
} from '@heroicons/react/24/solid'
import {
  Collapse,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Navbar,
  Typography,
} from '@material-tailwind/react'
import React from 'react'

const navListMenuItems = [
  {
    title: 'Products',
    description: 'Find the perfect solution for your needs.',
    icon: SquaresPlusIcon,
  },
  {
    title: 'About Us',
    description: 'Meet and learn about our dedication',
    icon: UserGroupIcon,
  },
  {
    title: 'Blog',
    description: 'Find the perfect solution for your needs.',
    icon: Bars4Icon,
  },
  {
    title: 'Services',
    description: 'Learn how we can help you achieve your goals.',
    icon: SunIcon,
  },
  {
    title: 'Support',
    description: 'Reach out to us for assistance or inquiries',
    icon: GlobeAmericasIcon,
  },
  {
    title: 'Contact',
    description: 'Find the perfect solution for your needs.',
    icon: PhoneIcon,
  },
  {
    title: 'News',
    description: 'Read insightful articles, tips, and expert opinions.',
    icon: NewspaperIcon,
  },
  {
    title: 'Products',
    description: 'Find the perfect solution for your needs.',
    icon: RectangleGroupIcon,
  },
  {
    title: 'Special Offers',
    description: 'Explore limited-time deals and bundles',
    icon: TagIcon,
  },
]

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const renderItems = navListMenuItems.map(
    ({ icon, title, description }, key) => (
      <a href="#" key={key}>
        <MenuItem className="flex items-center gap-3 rounded-lg hover:bg-[#0027FE] hover:text-white">
          <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2  ">
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
              className="text-xs !font-medium  text-blue-gray-500"
            >
              {description}
            </Typography>
          </div>
        </MenuItem>
      </a>
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
          <Typography as="div" variant="paragraph" className="font-semibold ">
            <ListItem
              className="flex items-center hover:text-[#0027FE] gap-2 py-2 pr-4 font-medium text-gray-900"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Услуги
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden  h-3 w-3 transition-transform lg:block ${
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
          <ul className="grid  grid-cols-3 gap-y-2 outline-none outline-0 hover:text-[#0027FE]">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden hover:text-[#0027FE]">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  )
}

const LinksSection = [
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

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <NavListMenu />
      {LinksSection.map((items, index) => (
        <Typography
          as="a"
          key={index}
          href={items.link}
          variant="paragraph"
          color="blue-gray"
          className="font-semibold text-[--text-primary]"
        >
          <ListItem className="flex hover:text-[#0027FE] items-center gap-2 py-2 pr-4">
            {items.title}
          </ListItem>
        </Typography>
      ))}
    </List>
  )
}

export function MegaMenuWithHover() {
  const [openNav, setOpenNav] = React.useState(false)

  React.useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpenNav(false)
    )
  }, [])

  return (
    <Navbar className=" mx-auto px-4 py-2 bg-[#F8F9FF] border-none shadow-none">
      <div className="flex items-center justify-between text-[#0027FE]">
        <Typography
          as="a"
          href="/"
          variant="h4"
          className="mr-4 cursor-pointer py-1.5 lg:ml-2"
        >
          Green empire
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  )
}
