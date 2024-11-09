'use client'
import { Title, ProductGridList, Container } from '@/components'
import { useFavoritesStore } from '@/store'

export default function Favorites() {
  const { favorites } = useFavoritesStore((state) => state)
  return (
    <Container className='max-w-screen-1216 px-5 py-10 1216:px-0 1216:py-20'>
      <Title className='mb-10'>Favorites</Title>
      <ProductGridList products={favorites} />
    </Container>
  )
}
