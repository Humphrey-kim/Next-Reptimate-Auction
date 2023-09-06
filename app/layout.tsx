import './globals.css'
import { Inter } from 'next/font/google'
import Headers from "./Header";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'REPTIMATE',
  description: 'REPTIMATE app',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="flex flex-col h-full">
        <Headers />
        <div className="flex-1 overflow-auto text-center pt-24 bg-white">{children}</div>
      </body>
    </html>
  )
}
