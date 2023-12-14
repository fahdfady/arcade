'use client'

import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from './components/navbar';
import Footer from './components/footer';


const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  // const { data: socialsfriends }= useFetch("socials?type=friends");
  // const { data: socialsformal } = useFetch("socials?type=formal");

  return (
    <html lang="en">
      <head>
        <meta name="author" content="Fahd Ashour" />
        <meta name="description" content="Fahd Fady Ashour's Personal Portfolio" />
        <meta name="keywords" content="Fahddev, Fahd Fady, Fahd Ashour, Fahd Fady Ashour, HTML, CSS, JavaScript, React, Next, Tailwind, Frontend, Developer" />
        <meta name="theme-color" content="#8b6bd1" />
        <link rel="apple-touch-icon" href="personal-pic.webp" />
        <link rel="icon" href="personal-pic.webp" />
      </head>
      <body className={inter.className}>
        <Navbar />
        
        <main>
          {children}
        </main>

        <Footer />
      </body>
    </html>
  )
}