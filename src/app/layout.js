import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  manifest: 'manifest.json',
  title: 'Plate',
  description: 'Plate is a web application designed to bring a world of delicious recipes to your fingertips.',
}

export const viewport = {
  themeColor: "#8936FF",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
