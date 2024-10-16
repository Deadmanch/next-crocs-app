import { notFound } from 'next/navigation'
import { getAllProducts, getProductBySlug } from '@/api'
import { Container, Title } from '@/components'
import { IProduct, IProductResponse } from '@/interfaces'

export async function generateStaticParams() {
  const { products }: IProductResponse = await getAllProducts()

  return products
    .filter((product) => product.category && product.category.slug && product.slug) // Фильтруем только те продукты, у которых есть категория и slug
    .map((product) => ({
      categorySlug: product.category.slug,
      productSlug: product.slug
    }))
}
export default async function ProductPage({ params }: { params: { productSlug: string } }) {
  const product: IProduct = await getProductBySlug(params.productSlug)
  if (!product) notFound()

  return (
    <Container className='max-w-screen-1216'>
      <Title>{product.title}</Title>
    </Container>
  )
}
