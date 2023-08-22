import '@/app/globals.css'
import type { Metadata } from 'next'
import { Gaegu } from 'next/font/google'

const gaegu = Gaegu({ subsets: ['latin'], weight: ['400','700'] })

export const metadata: Metadata = {
  title: 'Quote of The Day - Educational',
  description: 'Made with ❤️ by JusJira',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={gaegu.className}>{children}</body>
    </html>
  )
}
