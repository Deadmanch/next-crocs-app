import { ISize, IColor } from './product.interface'

export interface IFilterResponse {
  sizes: ISize[]
  colors: IColor[]
  maxPrice: number
  minPrice: number
}
