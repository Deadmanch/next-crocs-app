import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Crocs | Crocs Next App',
  description: 'Crocs | Crocs Next App'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return <main className='flex-auto'>{children}</main>
}
