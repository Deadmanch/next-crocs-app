import { ICategory } from './category.interface'

export interface IProductResponse {
  total: number
  products: IProduct[]
}

export interface IProduct {
  id: number
  title: string
  slug: string
  images: string[]
  metaTitle?: string
  metaDesc?: string
  seoText?: string
  originalPrice: number
  discountedPrice?: number
  tags?: string[]
  categoryId: number
  createdAt: string
  updatedAt: string
  colors: IColor[]
  sizes: ISize[]
  category: ICategory
}

export interface IColor {
  id: number
  title: string
  images: string[]
  inStock: boolean
  createdAt: string
  updatedAt: string
}

export interface ISize {
  id: number
  title: string
  inStock: boolean
  createdAt: string
  updatedAt: string
}
