import { Metadata } from 'next'
import { Container } from '@/components'
import { Footer, Header } from '@/layout'

export const metadata: Metadata = {
  title: 'Crocs | Crocs Next App',
  description: 'Crocs | Crocs Next App'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <Container className='flex min-h-screen flex-col'>
      <Header />
      <main className='flex-auto'>{children}</main>
        <Footer />
    </Container>
  )
}
