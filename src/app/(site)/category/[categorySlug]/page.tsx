import { notFound } from 'next/navigation'
import { getAllCategories, getCategoryBySlug, getFilter, getStartFilterByCategory } from '@/api'
import { CategoryList, Container } from '@/components'
import { ICategory, ICategoryResponse, IFilterResponse, IProductResponse } from '@/interfaces'
import { transformSearchParams, ISearchParams } from '@/helpers'
import { DEFAULT_PAGE_SIZE } from '@/constants'

export async function generateStaticParams() {
  const categories: ICategoryResponse = await getAllCategories()
  return categories.categories.map((category) => ({
    categorySlug: category.slug
  }))
}
export default async function CategoryPage({
  params,
  searchParams
}: {
  params: { categorySlug: string }
  searchParams: ISearchParams
}) {
  const category: ICategory = await getCategoryBySlug(params.categorySlug)
  if (!category) notFound()
  const { page, minPrice, maxPrice, colorIds, sizeIds } = transformSearchParams(searchParams)
  const { products, total }: IProductResponse = await getFilter({
    categoryId: category.id,
    page,
    limit: DEFAULT_PAGE_SIZE,
    minPrice,
    maxPrice,
    colorIds,
    sizeIds
  })
  const totalPages = Math.ceil(total / DEFAULT_PAGE_SIZE)
  const filtersData: IFilterResponse = await getStartFilterByCategory(category.id)

  return (
    <Container className='max-w-screen-1216'>
      <CategoryList
        filtersData={filtersData}
        products={products}
        category={category}
        totalPages={totalPages}
      />
    </Container>
  )
}
