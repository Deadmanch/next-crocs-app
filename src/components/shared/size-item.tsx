import { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'
interface SizeItemProps extends HTMLAttributes<HTMLDivElement> {
  title: string
  active?: boolean
  onClick?: () => void
  inStock: boolean
}

export const SizeItem = ({ title, active, onClick, inStock, ...props }: SizeItemProps) => {
  return (
    <div
      className={cn(
        'relative flex h-10 w-[81px] cursor-pointer items-center justify-center border border-gray-300 px-8 py-[10px] text-[17px] font-medium text-foreground transition-colors hover:bg-black hover:text-white',
        active && 'border-border bg-black text-white',
        inStock === false &&
          'disabled pointer-events-none cursor-not-allowed border-border text-foreground-gray'
      )}
      onClick={onClick}
      {...props}
    >
      {inStock === false && (
        <div className='absolute inset-0 top-1/2 h-px w-full -translate-y-1/2 skew-y-[25deg] bg-black'></div>
      )}
      {title}
    </div>
  )
}
