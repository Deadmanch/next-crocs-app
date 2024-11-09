import { IProduct, IColor, ISize } from '@/interfaces'

export interface ICartResponse {
  id: number
  userId: number | null
  token: string
  totalAmount: number
  cartItems: ICartItem[] | []
}

export interface ICartItem {
  id: number
  cartId: number
  productId: number
  colorId: number
  sizeId: number
  quantity: number
  createdAt: string
  updatedAt: string
  product: IProduct
  color: IColor
  size: ISize
}
