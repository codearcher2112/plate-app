import './globals.css';
import { Inter as FontSans } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { RecipeProvider } from '@/context/RecipeContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { cn } from '@/lib/utils';
import SocialLinks from '@/components/SocialLinks';

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
            <RecipeProvider>
                <Header />
                {children}
                <Footer />
                <SocialLinks className="fixed top-1/2 right-0 -translate-y-1/2 pr-3  flex-col hidden lg:flex" />
            </RecipeProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
