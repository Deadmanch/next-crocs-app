'use client'
import { cn } from '@/lib/utils'
import { Text, CountButtonIcon } from '@/components'

export interface ICoutnButtonProps {
  value?: number
  onClick?: (type: 'plus' | 'minus') => void
  className?: string
}

export const CountButton = ({ value = 1, onClick, className }: ICoutnButtonProps) => {
  return (
    <div
      className={cn(
        'flex h-[48px] w-[168px] items-center gap-[30px] border border-border px-[30px] py-4',
        className
      )}
    >
      <CountButtonIcon type='minus' disabled={value === 1} onClick={() => onClick?.('minus')} />
      <Text>{value}</Text>
      <CountButtonIcon type='plus' onClick={() => onClick?.('plus')} />
    </div>
  )
}
