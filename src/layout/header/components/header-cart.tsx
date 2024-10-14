import { Counter } from '@/components'
import { cn } from '@/lib/utils'

import CartIcon from '@/public/icons/header/cart.svg'

interface HeaderCartProps extends React.HTMLAttributes<HTMLDivElement> {}

export const HeaderCart = ({ className, ...props }: HeaderCartProps) => {
  return (
    <div className={cn('relative', className)} {...props}>
      <CartIcon />
      <Counter value={20} />
    </div>
  )
}
