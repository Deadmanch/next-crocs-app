import React, { AnchorHTMLAttributes } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  children: React.ReactNode
}

export const NavLink = ({ href, className, children, ...props }: LinkProps) => {
  return (
    <Link
      href={href}
      className={cn('transition-colors hover:text-dark-green', className)}
      {...props}
    >
      {children}
    </Link>
  )
}
