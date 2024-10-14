import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

type TextTag = 'p' | 'span'

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  tag?: TextTag
}

export const Text = forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, tag: Tag = 'p', ...props }, ref) => {
    return (
      <Tag
        className={cn(
          'font-fira text-[17px] font-normal text-foreground',
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Text.displayName = 'Text'
