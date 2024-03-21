import {
  Bars3Icon,
  Bars4Icon,
  ChevronDownIcon,
  GlobeAmericasIcon,
  NewspaperIcon,
  PhoneIcon,
  RectangleGroupIcon,
  SquaresPlusIcon,
  SunIcon,
  TagIcon,
  UserGroupIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import {
  Button,
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
import React from 'react'

interface NavItemProps {
  children: React.ReactNode
  href?: string
}
function NavItem({ children, href }: NavItemProps) {
  return (
    <li>
      <Typography
        as="a"
        href={href || '#'}
        target={href ? '_blank' : '_self'}
        variant="small"
        className="font-medium"
      >
        {children}
      </Typography>
    </li>
  )
}

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
              className="flex items-center transition-none  gap-2 font-medium p-0 "
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
          href="https://www.material-tailwind.com"
          target="_blank"
          variant="h6"
          color={isScrolling ? 'gray' : 'white'}
        >
          Material Tailwind
        </Typography>
        <ul
          className={`ml-10 hidden items-center gap-6 lg:flex ${
            isScrolling ? 'text-gray-900' : 'text-white'
          }`}
        >
          <NavItem>Home</NavItem>
          <NavItem>About Us</NavItem>
          <NavItem>Contact Us</NavItem>
          <NavItem href="https://www.material-tailwind.com/docs/react/installation">
            Docs
          </NavItem>
          <NavListMenu />
        </ul>
        <div className="hidden gap-2 lg:flex lg:items-center">
          <IconButton
            variant="text"
            color={isScrolling ? 'gray' : 'white'}
            size="sm"
          >
            <i className="fa-brands fa-twitter text-base" />
          </IconButton>
          <IconButton
            variant="text"
            color={isScrolling ? 'gray' : 'white'}
            size="sm"
          >
            <i className="fa-brands fa-facebook text-base" />
          </IconButton>
          <IconButton
            variant="text"
            color={isScrolling ? 'gray' : 'white'}
            size="sm"
          >
            <i className="fa-brands fa-instagram text-base" />
          </IconButton>
          <a href="https://www.material-tailwind.com/blocks" target="_blank">
            <Button color={isScrolling ? 'gray' : 'white'} size="sm">
              Blocks
            </Button>
          </a>
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
            <NavItem>Home</NavItem>
            <NavItem>About Us</NavItem>
            <NavItem>Contact Us</NavItem>
            <NavItem href="https://www.material-tailwind.com/docs/react/installation">
              Docs
            </NavItem>
            <NavListMenu />
          </ul>
          <div className="mt-4 flex items-center gap-2">
            <IconButton variant="text" color="gray" size="sm">
              <i className="fa-brands fa-twitter text-base" />
            </IconButton>
            <IconButton variant="text" color="gray" size="sm">
              <i className="fa-brands fa-facebook text-base" />
            </IconButton>
            <IconButton variant="text" color="gray" size="sm">
              <i className="fa-brands fa-instagram text-base" />
            </IconButton>
            <a href="https://www.material-tailwind.com/blocks" target="_blank">
              <Button color="gray" size="sm" className="ml-auto">
                Blocks
              </Button>
            </a>
          </div>
        </div>
      </Collapse>
    </MTNavbar>
  )
}

export default NavBar2
