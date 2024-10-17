import { HTMLAttributes } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Button, Text } from '@/components'

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
            <Button asChild variant='link' size='link' className='text-[13px] font-light'>
              <Link href={item.href}>{item.name}</Link>
            </Button>
          </li>
        ))}
      </ul>
      <Button asChild variant='link' size='link' className='text-[13px] font-light'>
        <Link href='#'>Site Map</Link>
      </Button>
    </div>
  )
}
