export enum PaymentMethod {
  CASH_APP_PAY = 'CASH_APP_PAY',
  AFTERPAY = 'AFTERPAY',
  PAYPAL = 'PAYPAL',
  CREDIT_CARD = 'CREDIT_CARD'
}

export interface ICreateOrderDto {
  fullName: string
  zipCode: string
  city: string
  streetAddress: string
  email: string
  state: string
  phoneNumber: string
  totalAmount: number
  paymentMethod: PaymentMethod
  items: IOrderItem[]
}

export interface IOrderItem {
  productId: number
  size?: string
  color?: string
  quantity: number
  price: number
}
