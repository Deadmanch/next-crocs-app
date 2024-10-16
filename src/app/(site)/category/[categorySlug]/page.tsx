import { notFound } from 'next/navigation'
import { getAllCategories, getCategoryBySlug, getProductByCategory } from '@/api'
import { Container, NavLink, Title } from '@/components'
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
            <NavLink href={`/category/${params.categorySlug}/${product.slug}`}>
              {product.title}
            </NavLink>
          </div>
        ))}
      </div>
    </Container>
  )
}
