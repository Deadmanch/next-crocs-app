import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import LoadingIcon from '@/public/icons/loading.svg'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap text-[17px] font-normal  transition-colors duration-300 ease-in-out focus-visible:outline-none disabled:pointer-events-none disabled:bg-muted disabled:text-muted-foreground  ',
  {
    variants: {
      variant: {
        default:
          'border bg-primary text-primary-foreground hover:bg-black hover:text-white active:bg-black active:text-white'
      },
      size: {
        default: 'h-[48px] px-[30px] py-[15px]',
        icon: 'size-9'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, loading, disabled, children, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        disabled={disabled || loading}
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {!loading ? children : <LoadingIcon className='size-5 animate-spin fill-white' />}
      </Comp>
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
