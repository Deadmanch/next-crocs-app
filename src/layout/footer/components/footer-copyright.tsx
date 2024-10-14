import { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'
import { NavLink, Text } from '@/components'

import { NAVIGATION_FOOTER_LINKS_SEO } from '@/mock/navigatiot-routing'

interface FooterCopyrightProps extends HTMLAttributes<HTMLDivElement> {}

export const FooterCopyright = ({ className, ...props }: FooterCopyrightProps) => {
  return (
    <div
      className={cn(
        'flex flex-col gap-5 768:flex-row 768:items-baseline 768:justify-between 768:gap-[29px]',
        className
      )}
      {...props}
    >
      <Text className='text-[13px] font-light'>
        &copy; {new Date().getFullYear()} All rights reserved
      </Text>
      <ul className='flex flex-col gap-[10px] 480:flex-row 960:gap-4'>
        {NAVIGATION_FOOTER_LINKS_SEO.map((item) => (
          <li key={item.id}>
            <NavLink className='text-[13px] font-light' href={item.href}>
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <NavLink className='text-[13px] font-light' href='#'>
        Site Map
      </NavLink>
    </div>
  )
}
