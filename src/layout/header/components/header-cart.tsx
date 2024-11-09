import { Counter } from '@/components'
import { cn } from '@/lib/utils'

import CartIcon from '@/public/icons/header/cart.svg'
import { useCartStore } from '@/store'

interface HeaderCartProps extends React.HTMLAttributes<HTMLDivElement> {}

export const HeaderCart = ({ className, ...props }: HeaderCartProps) => {
  const { cartItems } = useCartStore((state) => state)
  return (
    <div className={cn('relative', className)} {...props}>
      <CartIcon />
      <Counter value={cartItems.length} />
    </div>
  )
}
