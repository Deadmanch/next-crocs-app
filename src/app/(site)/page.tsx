import { Container, HeroBlock, ProductCard } from '@/components'

export default function Home() {
  return (
    <>
      <HeroBlock />
      <Container className='max-w-screen-1216'>
        <div className='mt-10 flex flex-wrap justify-center gap-5'>
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
    </>
  )
}
