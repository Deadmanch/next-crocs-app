import { AnchorHTMLAttributes } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface LinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  children: React.ReactNode
}

export const LinkButton = ({ href, className, children, ...props }: LinkButtonProps) => {
  return (
    <Link
      href={href}
      className={cn(
        'inline-flex h-[48px] items-center justify-center whitespace-nowrap border bg-primary px-[30px] py-[15px] text-[17px] font-normal text-primary-foreground transition-colors hover:bg-black hover:text-white',
        className
      )}
      {...props}
    >
      {children}
    </Link>
  )
}
