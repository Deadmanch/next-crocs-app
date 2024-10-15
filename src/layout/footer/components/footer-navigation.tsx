import { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'
import { NavLink, Text } from '@/components'
import {
  NAVIGATION_MENU_FOOTER,
  NAVIGATION_FOOTER_LINKS_HELP,
  NAVIGATION_FOOTER_LINKS_COMPANY
} from '@/mock/navigatiot-routing'
interface FooterNavigationProps extends HTMLAttributes<HTMLDivElement> {}

export const FooterNavigation = ({ className }: FooterNavigationProps) => {
  return (
    <nav className={cn('flex flex-col gap-5 960:flex-row', className)}>
      <div className='flex flex-col gap-5 480:flex-row 480:justify-between 960:w-1/2'>
        <div className='flex flex-col gap-5 480:w-1/2'>
          <Text tag='span' className='font-exo text-[20px] font-bold text-foreground'>
            Menu
          </Text>
          <ul className='flex flex-col gap-3'>
            {NAVIGATION_MENU_FOOTER.map((item) => (
              <li key={item.id}>
                <NavLink href={item.href}>{item.name}</NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className='flex flex-col gap-5 480:flex-1'>
          <Text tag='span' className='font-exo text-[20px] font-bold text-foreground'>
            Help
          </Text>
          <ul className='flex flex-col gap-3'>
            {NAVIGATION_FOOTER_LINKS_HELP.map((item) => (
              <li key={item.id}>
                <NavLink href={item.href}>{item.name}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className='flex flex-col gap-5 480:flex-row 960:w-1/2'>
        <div className='flex flex-col gap-5 480:w-1/2'>
          <Text tag='span' className='font-exo text-[20px] font-bold text-foreground'>
            Company
          </Text>
          <ul className='flex flex-col gap-3'>
            {NAVIGATION_FOOTER_LINKS_COMPANY.map((item) => (
              <li key={item.id}>
                <NavLink href={item.href}>{item.name}</NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className='flex flex-col gap-5 480:flex-1'>
          <Text tag='span' className='font-exo text-[20px] font-bold text-foreground'>
            Customer Service
          </Text>
          <ul className='flex flex-col gap-3'>
            <li>
              <Text>Monday-Friday 7:00AM&#8209;8:00PM</Text>
            </li>
            <li>
              <Text>Saturday-Sunday 8:00AM&#8209;5:00PM</Text>
            </li>
            <li>
              <a className='transition-colors hover:text-dark-green' href='tel:+18609527627'>
                +1 866 952 7627
              </a>
            </li>
            <li>
              <a
                className='transition-colors hover:text-dark-green'
                href='mailto:support@crocs.com'
              >
                support@crocs.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
