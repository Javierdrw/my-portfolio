import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from '@/lib/theme-context';
import { ThemeToggle } from '@/components/common/ThemeToggle';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mi Portfolio",
  description: "Portfolio personal de desarrollo web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" data-theme="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
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
