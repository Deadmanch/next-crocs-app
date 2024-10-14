import { Fira_Code, Exo_2 } from 'next/font/google'
import '@/styles/globals.css'
import { Providers } from '@/components'

const firaCode = Fira_Code({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-fira-code'
})
const exo2 = Exo_2({
  subsets: ['latin'],
  weight: ['500', '700', '800'],
  variable: '--font-exo-2'
})

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${exo2.variable} ${firaCode.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
