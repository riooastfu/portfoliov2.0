import './globals.css'
import { Inter } from 'next/font/google'

//components
import Navbar from '../components/navbar.jsx'
import Footer from '../components/footer.jsx'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html className="scroll-smooth" lang="en" data-theme="light">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
