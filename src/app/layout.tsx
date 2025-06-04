import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from '@/lib/theme-context';
import { ThemeToggle } from '@/components/common/ThemeToggle';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// Obtener la URL base
const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000';

export const metadata: Metadata = {
  title: "Mi Portfolio",
  description: "Portfolio personal de desarrollo web",
  metadataBase: new URL(baseUrl),
  openGraph: {
    title: "Mi Portfolio",
    description: "Portfolio personal de desarrollo web",
    url: baseUrl,
    siteName: "Mi Portfolio",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mi Portfolio",
    description: "Portfolio personal de desarrollo web",
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: "Tu Nombre" }],
  generator: "Next.js",
  keywords: ["portfolio", "desarrollo web", "frontend", "react", "next.js"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" data-theme="light">
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        <ThemeProvider>
          <div className="min-h-screen flex flex-col">
            <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900/90 backdrop-blur-sm">
              <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold gradient-text">Mi Portfolio</h1>
                <ThemeToggle />
              </div>
            </header>
            <main className="container mx-auto px-4 pt-24 flex-grow">
              {children}
            </main>
            <footer className="mt-auto py-8 text-center text-gray-600 dark:text-gray-400">
              <p>&copy; {new Date().getFullYear()} Mi Portfolio. Todos los derechos reservados.</p>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
