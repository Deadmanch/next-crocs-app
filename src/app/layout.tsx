import { Fira_Code, Exo_2 } from 'next/font/google'
import '@/styles/globals.css'
import { Providers } from '@/components'

const firaCode = Fira_Code({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700']
})
const exo2 = Exo_2({ subsets: ['latin'], weight: ['500', '700', '800'] })

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${firaCode.className} ${exo2.className} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
