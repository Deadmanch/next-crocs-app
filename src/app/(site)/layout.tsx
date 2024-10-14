import { Metadata } from 'next'
import { Container } from '@/components'
import { Header } from '@/layout'

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
    <>
      <div className='border-b border-border bg-background-light-green'>
        <Container>
          <Header />
        </Container>
      </div>
      <Container className='flex flex-col'>
        <main className='flex-auto'>{children}</main>
      </Container>
    </>
  )
}
