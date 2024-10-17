import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getAllCategories, getCategoryBySlug, getProductByCategory } from '@/api'
import { Button, Container, Title } from '@/components'
import { ICategory, ICategoryResponse, IProductResponse } from '@/interfaces'

export async function generateStaticParams() {
  const categories: ICategoryResponse = await getAllCategories()
  return categories.categories.map((category) => ({
    categorySlug: category.slug
  }))
}
export default async function CategoryPage({ params }: { params: { categorySlug: string } }) {
  const category: ICategory = await getCategoryBySlug(params.categorySlug)
  if (!category) notFound()
  const { products }: IProductResponse = await getProductByCategory(category.id)
  return (
    <Container className='max-w-screen-1216'>
      <Title>{category.title}</Title>
      <div className='flex flex-col gap-2'>
        {products.map((product) => (
          <div key={product.id}>
            <Button asChild variant='link'>
              <Link href={`/category/${params.categorySlug}/${product.slug}`}>{product.title}</Link>
            </Button>
          </div>
        ))}
      </div>
    </Container>
  )
}
