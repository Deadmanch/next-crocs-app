import { ICategory, IFilterResponse, IProduct } from '@/interfaces'
import { cn } from '@/lib/utils'
import {
  Container,
  Title,
  CustomBreadcrumbs,
  ProductGridList,
  CustomPagination,
  SortSelect,
  FilterDrawer
} from '@/components'
import { htmlParser } from '@/helpers'

interface CategoryListProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  products: IProduct[]
  filtersData: IFilterResponse
  totalPages: number
  category: ICategory
}

export const CategoryList = async ({
  products,
  category,
  totalPages,
  className,
  filtersData,
  ...props
}: CategoryListProps) => {
  const { seoTextRight, seoTextLeft, title } = category
  return (
    <section className={cn('px-5 py-10', className)} {...props}>
      <Container className='max-w-screen-1216'>
        <div className='flex flex-col gap-10'>
          <div className='flex flex-col gap-4'>
            <CustomBreadcrumbs />
            <Title>{title}</Title>
          </div>
          <div className='flex items-center justify-between'>
            <FilterDrawer filtersData={filtersData} />
            <SortSelect />
          </div>
          <ProductGridList products={products} />
          <div>
            <CustomPagination totalPages={totalPages} />
          </div>
          <div className='flex flex-col gap-5 960:flex-row 960:gap-20'>
            {seoTextRight && (
              <div className='flex flex-col gap-5 960:w-1/2'>{htmlParser(seoTextRight)}</div>
            )}
            {seoTextLeft && (
              <div className='flex flex-col gap-5 960:w-1/2'>{htmlParser(seoTextLeft)}</div>
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}
