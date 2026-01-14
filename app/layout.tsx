import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SpinCity',
  description: 'Live DJ Streaming with Tips',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 min-h-screen text-white`}>
        <nav className="backdrop-blur-md bg-black/30 border-b border-white/10 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent drop-shadow-lg hover:scale-105 transition-all">🎰 SpinCity</Link>
              </div>
              <div className="flex space-x-4 items-center">
                <Link href="/" className="px-3 py-2 rounded-xl text-white/90 hover:bg-white/20 hover:scale-105 transition-all font-medium">Lobby</Link>
                <Link href="/stream/1" className="px-3 py-2 rounded-xl text-white/90 hover:bg-white/20 hover:scale-105 transition-all font-medium">Stream</Link>
                <Link href="/dashboard" className="px-3 py-2 rounded-xl text-white/90 hover:bg-white/20 hover:scale-105 transition-all font-medium">DJ Dashboard</Link>
              </div>
            </div>
          </div>
        </nav>
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
      </body>
    </html>
  )
}
