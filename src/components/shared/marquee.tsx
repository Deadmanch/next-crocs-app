import Marquee from 'react-fast-marquee'
import SmallStarIcon from '@/public/icons/star-small.svg'
import { Text } from '@/components'

export const MarqueeComponent = () => {
  return (
    <>
      <Marquee direction='right' autoFill>
        <div className='flex items-center gap-4 bg-background-yellow px-2 py-4'>
          <Text tag='span' className='font-medium'>
            Sale 25%
          </Text>
          <SmallStarIcon />
        </div>
      </Marquee>
      <Marquee direction='left' speed={40} autoFill>
        <div className='flex items-center gap-4 bg-background-light-green px-2 py-4'>
          <Text tag='span'>New Collection</Text>
          <SmallStarIcon className='translate-y-1' />
        </div>
      </Marquee>
    </>
  )
}
