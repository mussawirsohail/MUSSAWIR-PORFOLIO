import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from './contexts/ThemeContext'
import ThemeToggle from './component/ThemeToggle'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mussawir Sohail- Full Stack Developer',
  description: 'Portfolio of John Doe, a Full Stack Developer specializing in React and Node.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300`}>
        <ThemeProvider>
          <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 shadow z-50">
            <div className="container mx-auto px-4">
              <div className="flex justify-between items-center py-4">
                <a href="#" className="text-2xl font-bold text-black hover:text-blue-600">MS</a>
                <ul className="flex space-x-6">
                  <li><a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 transition duration-300">About</a></li>
                  <li><a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition duration-300">Projects</a></li>
                  <li><a href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400 transition duration-300">Skills</a></li>
                  <li><a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition duration-300">Contact</a></li>
                </ul>
                <ThemeToggle />
              </div>
            </div>
          </nav>
          {children}
          <footer className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 py-8">
            <div className="container mx-auto px-4 text-center">
              <p>2025.All rights reserved.</p>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}

