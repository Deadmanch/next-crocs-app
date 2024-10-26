import { HtmlHTMLAttributes } from 'react'
import Image from 'next/image'
import { Title, Text, SendEmailForm, Container } from '@/components'
import { cn } from '@/lib/utils'

interface SubscribeBlockProps extends HtmlHTMLAttributes<HTMLDivElement> {}

export const SubscribeBlock = ({ className, ...props }: SubscribeBlockProps) => {
  return (
    <section className={cn('mt-5', className)} {...props}>
      <Container className='max-w-screen-1216'>
        <div className='px-5 768:flex 768:gap-5 1216:px-0'>
          <div className='flex flex-col gap-5 py-4 768:w-1/2 768:py-[56px] 1216:py-20'>
            <Title tag='h2'>Subscribe to our newsletter</Title>
            <Text>
              Subscribe to our email newsletter today to receive update on the latest news
            </Text>
            <SendEmailForm className='1216:mt-5 1216:w-[495px]' />
            <Text tag='span' className='text-[15px]'>
              By subscribing, you confirm that you have read and agree to the Privacy Policy
            </Text>
          </div>
          <div className='hidden w-1/2 768:block'>
            <Image
              src='/images/email-block-img.jpg'
              alt='Image'
              width={598}
              height={420}
              className='size-full'
            />
          </div>
        </div>
      </Container>
    </section>
  )
}
