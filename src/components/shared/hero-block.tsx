import Image from 'next/image'
import { Container, Text, Title, LinkButton } from '@/components'
import { cn } from '@/lib/utils'
import ImageBig from '@/public/images/hero-block/img1.jpg'
import ImageSmall1 from '@/public/images/hero-block/img2.jpg'
import ImageSmall2 from '@/public/images/hero-block/img3.jpg'
import StarIcon from '@/public/icons/star.svg'
import { NavigationRouting } from '@/mock/navigatiot-routing'

interface HeroBlockProps extends React.HTMLAttributes<HTMLDivElement> {}

export const HeroBlock = ({ className, ...props }: HeroBlockProps) => {
  return (
    <section className={cn('px-5 py-10', className)} {...props}>
      <Container className='relative max-w-screen-1216'>
        <StarIcon className='absolute left-[33%] top-[-20px] hidden 768:block 960:left-[35%] 960:top-[10%] 1216:left-[38%] 1216:top-[30px]' />
        <StarIcon className='absolute bottom-[38%] right-0 hidden fill-background-light-green 768:block 960:bottom-[40%] 1216:right-[50px]' />
        <div className='flex flex-col justify-between gap-5 768:flex-row'>
          <Image
            src={ImageBig}
            alt='Image'
            className='hidden w-1/3 border border-border 768:block'
          />
          <div className='flex flex-col justify-end gap-[30px] 768:w-2/3 1216:gap-[46px]'>
            <div className='flex flex-col gap-5'>
              <Title tag='h1' className='text-center'>
                Discover Comfort
                <br />
                <span className='text-pink'>and Style with Crocs</span>
              </Title>
              <Text className='text-center'>
                Reimagine Comfort Every Step <br /> Explore Crocs for innovative and stylish designs
              </Text>
              <LinkButton href={NavigationRouting.CATEGORY} className='768:mx-auto 768:w-[186px]'>
                Shop now
              </LinkButton>
            </div>
            <div className='grid grid-cols-1 gap-5 480:grid-cols-2'>
              <Image src={ImageSmall1} alt='Image-1' className='w-full border border-border' />
              <Image src={ImageSmall2} alt='Image-2' className='w-full border border-border' />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
