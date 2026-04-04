import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import { LanguageProvider } from '@/lib/language-context'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin', 'latin-ext'],
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'Kaplan İnşaat | Kocaeli Çatı ve Oluk Sistemleri',
  description: 'Kocaeli genelinde profesyonel çatı sistemleri, eksiz oluk sistemleri ve izolasyon hizmetleri. İzmit, Gebze, Darıca, Körfez, Başiskele, Gölcük, Kartepe, Kandıra. Ücretsiz keşif, garantili işçilik.',
  keywords: 'çatı sistemleri, eksiz oluk, izolasyon, membran, Kocaeli, İzmit, Gebze, Darıca, Körfez, Başiskele, Gölcük, Kartepe, Kandıra, çatı ustası, çatı tamiri',
  authors: [{ name: 'Kaplan İnşaat' }],
  openGraph: {
    title: 'Kaplan İnşaat | Kocaeli Çatı ve Oluk Sistemleri',
    description: 'Kocaeli genelinde profesyonel çatı sistemleri, eksiz oluk sistemleri ve izolasyon hizmetleri. Ücretsiz keşif, garantili işçilik.',
    locale: 'tr_TR',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#fafafa',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          <LanguageProvider>
            {children}
            <Analytics />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
