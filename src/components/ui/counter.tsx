import { cn } from '@/lib/utils'

interface CounterProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number
}

export const Counter = ({ value, className, ...props }: CounterProps) => {
  return (
    <div
      className={cn(
        'absolute -top-[2px] left-[calc(100%-20px)] flex h-[18px] min-w-[20px] items-center justify-center rounded-full border border-black bg-white px-[2px] text-[12px] font-normal text-black',
        className
      )}
      {...props}
    >
      {value}
    </div>
  )
}
