'use client'

import './globals.css'
import { Web3Modal } from '../lib/wallet'

export const metadata = {
  title: 'Web3 Dashboard',
  description: 'PNL, Wallet, Portfolio on Base chain',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Web3Modal />
      </body>
    </html>
  )
}
