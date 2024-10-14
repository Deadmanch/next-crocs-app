import Link from 'next/link'

import InstagramIcon from '@/public/icons/social/instagram.svg'
import FacebookIcon from '@/public/icons/social/facebook.svg'
import TwitterIcon from '@/public/icons/social/twitter.svg'
import YoutubeIcon from '@/public/icons/social/youtube.svg'

const mockData = [
  {
    id: 1,
    href: '#',
    icon: <InstagramIcon />
  },
  {
    id: 2,
    href: '#',
    icon: <FacebookIcon />
  },
  {
    id: 3,
    href: '#',
    icon: <YoutubeIcon />
  },
  {
    id: 4,
    href: '#',
    icon: <TwitterIcon />
  }
]

export const Social = () => {
  return (
    <div className='flex items-center gap-4'>
      {mockData.map((item) => (
        <Link key={item.id} href={item.href} className='transition-colors hover:fill-dark-green'>
          {item.icon}
        </Link>
      ))}
    </div>
  )
}
