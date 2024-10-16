export interface IOrderResponse {
  id: number
  userId: number
  token: string
  fullName: string
  zipCode: string
  city: string
  streetAddress: string
  email: string
  state: string
  phoneNumber: string
  totalAmount: number
  orderStatus: string
  paymentMethod: string
  createdAt: string
  updatedAt: string
  orderItem: IOrderItem[]
}

export interface IOrderItem {
  id: number
  orderId: number
  productId: number
  size: string
  color: string
  quantity: number
  price: number
  createdAt: string
  updatedAt: string
}
