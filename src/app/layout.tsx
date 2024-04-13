import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from "@/components/ui/toaster"
import ThemeProvider from '@/stores/providers/ThemeProvider'
import NavBar from '@/components/NavBar'
import UserProvider from '@/stores/providers/UserProvider'
import ReactQueryProvider from '@/stores/providers/ReactQueryProvider'

const inter = Inter({ subsets: ['latin'] })



export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReactQueryProvider>
          <ThemeProvider>
            <UserProvider>
              <NavBar />
              {children}
              <Toaster />
            </UserProvider>
          </ThemeProvider>
        </ReactQueryProvider>
      </body>
    </html>
  )
}
