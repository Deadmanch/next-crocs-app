import { m } from 'framer-motion'

import { cn } from '@/lib/utils'

import { NavLink, Separator } from '@/components'

import { NAVIGATION_MENU_MOBILE, NavigationRouting } from '@/mock/navigatiot-routing'
import { HeaderSearch } from './header-search'

interface MobileMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen: boolean
  onClose: () => void
}

export const MobileMenu = ({ isOpen, onClose, className }: MobileMenuProps) => {
  const variants = {
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut'
      }
    },
    closed: {
      opacity: 0,
      x: '100%',
      transition: {
        duration: 0.5,
        ease: 'easeInOut'
      }
    }
  }
  return (
    <m.aside
      initial={'closed'}
      animate={isOpen ? 'open' : 'closed'}
      variants={variants}
      className={cn(
        'fixed right-0 top-[81px] z-40 h-screen w-full bg-white 768:top-[89px]',
        className
      )}
    >
      {isOpen && (
        <div className='flex flex-col gap-10 p-5'>
          <HeaderSearch className='768:hidden' />
          <nav className='flex flex-col gap-10'>
            <ul className='flex flex-col gap-5'>
              {NAVIGATION_MENU_MOBILE.map((item) => (
                <li key={item.id}>
                  <NavLink href={item.href} onClick={onClose}>
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
            <Separator className='bg-gray-300' />
            <ul className='flex flex-col gap-5'>
              <li>
                <NavLink href={NavigationRouting.CONTACTS} onClick={onClose}>
                  Contacts
                </NavLink>
              </li>
              <li>
                <NavLink href={NavigationRouting.FAVORITES} onClick={onClose}>
                  Favorites
                </NavLink>
              </li>
              <li>
                <NavLink href={NavigationRouting.PROFILE} onClick={onClose}>
                  Account
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </m.aside>
  )
}
