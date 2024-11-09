import { useEffect } from 'react'
import { IAddToCartDto } from '@/api/requests/cart/dto/add-to-cart.dto'
import { ICartItem } from '@/interfaces'
import { useCartStore } from '@/store'

type ReturnProps = {
  totalAmount: number
  cartItems: ICartItem[]
  loading: boolean
  updateItemQuantity: (quantity: number, productId: number) => Promise<void>
  removeItem: (productId: number) => Promise<void>
  addToCart: (data: IAddToCartDto) => Promise<void>
  createCart: () => Promise<void>
}

export const useCart = (): ReturnProps => {
  const cartState = useCartStore((state) => state)

  useEffect(() => {
    cartState.fetchCart()
  }, [])

  return cartState
}
