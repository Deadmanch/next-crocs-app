import { HTMLAttributes } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface ColorItemProps extends HTMLAttributes<HTMLDivElement> {
  image: string
  title: string
  inStock: boolean
  active?: boolean
  onClick?: () => void
}

export const ColorItem = ({ image, title, inStock, active, onClick, ...props }: ColorItemProps) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        'relative flex h-20 w-[83px] cursor-pointer flex-col items-center justify-center gap-1 border border-gray-200 px-[4.5px] py-2 text-[12px] font-light text-foreground transition-colors hover:bg-black hover:text-white',
        active && 'border-border bg-black text-white',
        inStock === false &&
          'disabled pointer-events-none cursor-not-allowed border-border text-foreground-gray'
      )}
      {...props}
    >
      {inStock === false && (
        <div className='absolute inset-0 top-1/2 h-px w-full -translate-y-1/2 skew-y-[44deg] bg-black'></div>
      )}
      <Image src={image} alt={title} width={67} height={44} />
      {title}
    </div>
  )
}
