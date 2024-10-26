import { IProductResponse } from '@/interfaces'
import { cn } from '@/lib/utils'
import {
  Container,
  Title,
  Text,
  CustomBreadcrumbs,
  ProductGridList,
  CustomPagination
} from '@/components'
import { htmlParser } from '@/helpers'
import { getProductByCategory } from '@/api'

interface CategoryListProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  categoryId: number
  categoryTitle: string
  categorySlug: string
  seoTextRight?: string
  seoTextLeft?: string
  currentPage: string
}

export const CategoryList = async ({
  categoryId,
  categoryTitle,
  seoTextRight,
  seoTextLeft,
  categorySlug,
  currentPage,
  className,
  ...props
}: CategoryListProps) => {
  const { products, total }: IProductResponse = await getProductByCategory(
    categoryId,
    '8',
    currentPage
  )
  const totalPages = Math.ceil(total / 8)
  return (
    <section className={cn('px-5 py-10', className)} {...props}>
      <Container className='max-w-screen-1216'>
        <div className='flex flex-col gap-10'>
          <div className='flex flex-col gap-4'>
            <CustomBreadcrumbs />
            <Title>{categoryTitle}</Title>
          </div>
          <div className='flex justify-between'>
            <Text>Фильтр</Text>
            <Text>Сортировка</Text>
          </div>
          <ProductGridList products={products} categorySlug={categorySlug} />
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
