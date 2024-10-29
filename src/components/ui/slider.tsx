'use client'
import { useState, forwardRef, useEffect } from 'react'

import * as SliderPrimitive from '@radix-ui/react-slider'

import { cn } from '@/lib/utils'

interface RangeSliderProps {
  min: number
  max: number
  step: number
  value?: number | readonly number[]
  onValueChange?: (value: number[]) => void
  className?: string
}

const RangeSlider = forwardRef<HTMLDivElement, RangeSliderProps>(
  ({ min, max, step, value, onValueChange, className, ...props }, ref) => {
    const initialValue = Array.isArray(value) ? value : [min, max]
    const [localValue, setLocalValue] = useState<number[]>(initialValue)
    useEffect(() => {
      setLocalValue(Array.isArray(value) ? value : [min, max])
    }, [min, max, value])
    const handleValueChange = (newValues: number[]) => {
      setLocalValue(newValues)
      if (onValueChange) onValueChange(newValues)
    }

    return (
      <div className='w-full'>
        <SliderPrimitive.Root
          className={cn('relative flex w-full touch-none select-none items-center', className)}
          value={localValue}
          onValueChange={handleValueChange}
          min={min}
          max={max}
          step={step}
          ref={ref}
          {...props}
        >
          <SliderPrimitive.Track className='relative h-[2px] grow overflow-hidden bg-background-light-gray'>
            <SliderPrimitive.Range className='absolute h-full bg-black' />
          </SliderPrimitive.Track>
          <SliderPrimitive.Thumb className='block size-5 cursor-grabbing rounded-full bg-black outline-none' />
          <SliderPrimitive.Thumb className='block size-5 cursor-grabbing rounded-full bg-black outline-none' />
        </SliderPrimitive.Root>
      </div>
    )
  }
)

RangeSlider.displayName = SliderPrimitive.Root.displayName

export { RangeSlider }
