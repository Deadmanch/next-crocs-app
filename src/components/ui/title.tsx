import { forwardRef } from 'react'
import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'

type TitleTag = 'h1' | 'h2' | 'h3'

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  tag?: TitleTag
}

const titleVariants = cva('font-exo font-extrabold', {
  variants: {
    tag: {
      h1: 'text-[32px] leading-tight 768:text-[40px] 960:text-[48px]',
      h2: 'text-[28px] leading-tight 768:text-[32px] 960:text-[40px]',
      h3: 'text-[17px] font-bold leading-tight'
    }
  },
  defaultVariants: {
    tag: 'h1'
  }
})

export const Title = forwardRef<HTMLHeadingElement, TitleProps>(
  ({ className, tag: Tag = 'h1', ...props }, ref) => {
    return <Tag ref={ref} className={cn(titleVariants({ tag: Tag }), className)} {...props} />
  }
)
Title.displayName = 'Title'
