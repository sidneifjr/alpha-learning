import './globals.css'

import { GeistSans } from 'geist/font/sans'
import type { Metadata } from 'next'

import { Header } from '@/components/header'

export const metadata: Metadata = {
  title: {
    template: '%s | Alpha Learning',
    default: 'Alpha Learning',
  },
  description: 'Os melhores cursos, ao menor custo',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <Header />

        {children}
      </body>
    </html>
  )
}
