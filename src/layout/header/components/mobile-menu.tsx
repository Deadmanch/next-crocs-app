import { m } from 'framer-motion'

import Link from 'next/link'
import { cn } from '@/lib/utils'

import { Button, Separator } from '@/components'

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
                  <Button asChild variant='link' size='link' onClick={onClose}>
                    <Link href={item.href}>{item.name}</Link>
                  </Button>
                </li>
              ))}
            </ul>
            <Separator className='bg-gray-300' />
            <ul className='flex flex-col gap-5'>
              <li>
                <Button asChild variant='link' size='link' onClick={onClose}>
                  <Link href={NavigationRouting.CONTACTS} onClick={onClose}>
                    Contacts
                  </Link>
                </Button>
              </li>
              <li>
                <Button asChild variant='link' size='link' onClick={onClose}>
                  <Link href={NavigationRouting.FAVORITES} onClick={onClose}>
                    Favorites
                  </Link>
                </Button>
              </li>
              <li>
                <Button asChild variant='link' size='link' onClick={onClose}>
                  <Link href={NavigationRouting.PROFILE} onClick={onClose}>
                    Account
                  </Link>
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </m.aside>
  )
}
