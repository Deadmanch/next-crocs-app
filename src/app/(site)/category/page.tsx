import { getFilter, getStartFilter } from '@/api'
import {
  Container,
  Title,
  CustomBreadcrumbs,
  FilterDrawer,
  SortSelect,
  ProductGridList,
  CustomPagination,
  SubscribeBlock
} from '@/components'
import { DEFAULT_PAGE_SIZE } from '@/constants'
import { ISearchParams, transformSearchParams } from '@/helpers'
import { IProductResponse } from '@/interfaces'

export default async function AllProducts({ searchParams }: { searchParams: ISearchParams }) {
  const { page, minPrice, maxPrice, colorIds, sizeIds, categoryId } =
    transformSearchParams(searchParams)
  const { products, total }: IProductResponse = await getFilter({
    categoryId,
    page,
    limit: DEFAULT_PAGE_SIZE,
    minPrice,
    maxPrice,
    colorIds,
    sizeIds
  })
  const totalPages = Math.ceil(total / DEFAULT_PAGE_SIZE)
  const filters = await getStartFilter()
  return (
    <>
      <section className='px-5 py-10'>
        <Container className='max-w-screen-1216'>
          <div className='flex flex-col gap-10'>
            <div className='flex flex-col gap-4'>
              <CustomBreadcrumbs />
              <Title>All Products</Title>
            </div>
            <div className='flex items-center justify-between'>
              <FilterDrawer filtersData={filters} />
              <SortSelect />
            </div>
            <ProductGridList products={products} />
            <div>
              <CustomPagination totalPages={totalPages} />
            </div>
          </div>
        </Container>
      </section>
      <SubscribeBlock className='bg-background-yellow' />
    </>
  )
}
