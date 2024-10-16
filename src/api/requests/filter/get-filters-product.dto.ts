export interface IGetFiltersProductDto {
  categoryId: number
  minPrice?: number
  maxPrice?: number
  colorIds?: number[]
  sizeIds?: number[]
  page?: number
  limit?: number
}
