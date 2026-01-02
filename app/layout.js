import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Amanze Anyiam-Osigwe | Data Analyst & Full-Stack Developer',
  description: 'Data analyst specializing in e-commerce analytics, SQL optimization, and data-driven storytelling. Expert in Python, React, and cloud technologies.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
