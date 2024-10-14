import * as React from 'react'

import { FieldError } from 'react-hook-form'
import { cn } from '@/lib/utils'
import { Text } from '@/components'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: FieldError
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, ...props }, ref) => {
    return (
      <>
        <input
          type={type}
          className={cn(
            'flex h-12 w-full border border-input bg-white px-5 py-4 font-fira text-[17px] text-foreground transition-colors placeholder:text-muted-foreground focus-visible:border-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
            className,
            error && 'border-red'
          )}
          ref={ref}
          {...props}
        />
        {error && <Text className='text-red'>{error.message}</Text>}
      </>
    )
  }
)
Input.displayName = 'Input'

export { Input }
