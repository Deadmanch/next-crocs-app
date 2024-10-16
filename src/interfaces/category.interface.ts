export interface ICategoryResponse {
  total: number
  categories: ICategory[]
}

export interface ICategory {
  id: number
  name: string
  title: string
  slug: string
  metaTitle: string
  metaDesc: string
  seoTextRight?: string
  seoTextLeft?: string
  createdAt: string
  updatedAt: string
}
