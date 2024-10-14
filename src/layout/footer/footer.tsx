import { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'
import { Container } from '@/components'
import Logo from '@/public/logo-big.svg'
import { FooterCopyright, FooterNavigation, Payment, Social } from '@/layout'

interface FooterProps extends HTMLAttributes<HTMLDivElement> {}

export const Footer = ({ className, ...props }: FooterProps) => {
  return (
    <div className='border-t border-border bg-background-light-green'>
      <Container className='max-w-screen-1216'>
        <footer className={cn('px-5 pb-10 pt-20', className)} {...props}>
          <div className='flex flex-col gap-10'>
            <Logo className='480:mx-auto' />
            <FooterNavigation />
            <div className='flex flex-col gap-5 480:flex-row 480:justify-between'>
              <Payment />
              <Social />
            </div>
            <FooterCopyright />
          </div>
        </footer>
      </Container>
    </div>
  )
}
