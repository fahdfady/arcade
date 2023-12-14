import Footer from './components/footer'
import Navbar from './components/navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import 'flowbite';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Arcade',
  description: 'trading, construction, and supplies',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='dark'>
      <body className={inter.className}>
        <Navbar />

        <main className='min-h-[45vh] mt-[68px]'>
          {children}
        </main>

        <Footer />

        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.0.0/flowbite.min.js"></script>
      </body>
    </html>
  )
}
