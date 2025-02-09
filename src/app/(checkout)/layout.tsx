import { Metadata } from 'next'
import { ArrowUp, Container } from '@/components'
import { Footer, Header } from '@/layout'

export const metadata: Metadata = {
  title: 'Checkout | Crocs Next App',
  description: 'Checkout | Crocs Next App'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <Container className='flex min-h-screen flex-col'>
      <Header isSearch={false} />
      <main className='flex-auto'>{children}</main>

      <ArrowUp />
      <Footer />
    </Container>
  )
}
