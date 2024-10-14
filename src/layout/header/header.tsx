'use client'
import { useState } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import Logo from '@/public/logo.svg'
import UserIcon from '@/public/icons/header/profile.svg'
import { NAVIGATION_MENU, NavigationRouting } from '@/mock/navigatio-routing'
import {
  Burger,
  HeaderCart,
  HeaderFavorites,
  HeaderSearch,
  MobileMenu
} from '@/layout'
import { NavLink } from '@/components'

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Header = ({ className, ...props }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toogleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header
      className={cn('sticky top-0 z-50 px-[30px] py-5 1216:px-0', className)}
      {...props}
    >
      <div className='flex items-center justify-between 960:gap-[24px] 1216:gap-[60px]'>
        <Link href={NavigationRouting.HOME}>
          <Logo />
        </Link>
        <nav className='hidden 960:block'>
          <ul className='flex items-center gap-4 1216:gap-[31px]'>
            {NAVIGATION_MENU.map((item) => (
              <li key={item.id}>
                <NavLink href={item.href}>{item.name}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <HeaderSearch className='hidden w-[300px] 768:block 1216:w-[360px]' />
        <div className='flex items-center gap-5 1216:gap-[61px]'>
          <Link className='hidden 960:block' href={NavigationRouting.PROFILE}>
            <UserIcon />
          </Link>
          <Link className='hidden 768:block' href={NavigationRouting.FAVORITES}>
            <HeaderFavorites />
          </Link>
          <Link href={NavigationRouting.CHECKOUT}>
            <HeaderCart />
          </Link>

          <Burger
            className='960:hidden'
            isOpen={isMenuOpen}
            onClick={toogleMenu}
          />
        </div>
      </div>

      <MobileMenu
        className='960:hidden'
        isOpen={isMenuOpen}
        onClose={toogleMenu}
      />
    </header>
  )
}
