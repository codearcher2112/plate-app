import './globals.css';
import { Inter as FontSans } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { cn } from '@/lib/utils';

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

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
      <body
          className={cn(
            "font-sans antialiased",
            fontSans.variable
          )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
            <Header />
            {children}
            <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
