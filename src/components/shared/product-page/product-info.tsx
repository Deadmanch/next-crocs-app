import { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'
import { Text } from '@/components'

interface ProductInfoProps extends HTMLAttributes<HTMLDivElement> {}

export const ProductInfo = ({ className, ...props }: ProductInfoProps) => {
  return (
    <div
      className={cn(
        'flex flex-col gap-5 768:flex-row 768:flex-wrap 1216:flex-nowrap 1216:gap-[24px]',
        className
      )}
      {...props}
    >
      <div className='flex flex-col gap-4 768:w-[354px] 960:w-[calc(33%-20px)] 1216:w-1/3'>
        <Text className='text-center font-exo text-[20px] font-bold'>Echo Clog</Text>
        <Text>
          The Echo Collection is for those who want comfort without compromising their look.
        </Text>
        <Text>
          This fully molded clog is anything but conformist, with bold sculpting and sport
          inspiration that keeps streetwear at its core.
        </Text>
        <Text>
          With Croslite construction and a LiteRide drop-in footbed, you can stay comfortable while
          hitting the street in the Echo collection.
        </Text>
      </div>
      <div className='flex flex-col gap-4 768:w-[354px] 960:w-[calc(33%-20px)] 1216:w-1/3'>
        <Text className='text-center font-exo text-[20px] font-bold'>Echo Clog Details:</Text>
        <ul className='list-star font-fira text-[17px] leading-snug text-foreground'>
          <li>Incredibly light and easy to wear</li>
          <li>Fully molded Croslite upper and foundation</li>
          <li>Water-friendly and buoyant; weighs only ounces</li>
          <li>Ventilation ports add breathability and help shed water</li>
          <li>Easy to clean and quick to dry</li>
          <li>Customizable with Jibbitz charms</li>
        </ul>
      </div>
      <div className='flex flex-col gap-4 960:w-[calc(33%-20px)] 1216:w-1/3'>
        <Text className='text-center font-exo text-[20px] font-bold'>
          Free shipping on orders $54 and up!
        </Text>
        <Text>
          Free Shipping on Qualifying Orders Valid total is determined after discounts are applied
          and does not include any applicable taxes.
        </Text>
        <Text>
          This limited-time offer is subject to change without notice and is only valid with Economy
          Shipping.
        </Text>
        <Text>Free returns on all orders except final sale.</Text>
      </div>
    </div>
  )
}
