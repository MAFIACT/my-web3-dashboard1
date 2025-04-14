'use client'

import { useWeb3ModalAccount, useWeb3Modal } from '../lib/wallet'

export default function Home() {
  const { address, isConnected } = useWeb3ModalAccount()
  const { open } = useWeb3Modal()

  const fakePNL = 5423.76
  const fakeTokens = [
    { name: 'SKINME', symbol: 'SKINME', value: 420.0, price: 0.0002088 },
    { name: 'MOT', symbol: 'MOT', value: 100000.0, price: 0.047666 },
    { name: 'doginme', symbol: 'DOGI', value: 50000.0, price: 0.0007360 },
    { name: 'BRETT', symbol: 'BRETT', value: 3500.0, price: 0.03526 },
    { name: 'AI Protocol', symbol: 'AI', value: 100.0, price: 2.8 }
  ]

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12 font-sans">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">🧠 MVP Web3 Dashboard</h1>
        {isConnected ? (
          <p className="text-green-400">{address}</p>
        ) : (
          <button onClick={open} className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200">
            Connect Wallet
          </button>
        )}
      </header>

      {isConnected && (
        <main className="space-y-10">
          <section>
            <h2 className="text-xl mb-2">💰 Your PNL</h2>
            <div className="text-3xl text-green-400 font-bold">${fakePNL.toLocaleString()}</div>
          </section>

          <section>
            <h2 className="text-xl mb-2">📊 Your Portfolio</h2>
            <ul className="space-y-2">
              {fakeTokens.map((token, i) => (
                <li key={i} className="flex justify-between border-b border-gray-700 pb-1">
                  <span>{token.symbol}</span>
                  <span className="text-gray-400">
                    {token.value} × ${token.price.toFixed(6)}
                  </span>
                  <span className="text-green-400 font-semibold">
                    ${(token.value * token.price).toLocaleString(undefined, { maximumFractionDigits: 2 })}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        </main>
      )}

      {!isConnected && (
        <p className="mt-10 text-center text-gray-500">Connect your wallet to view your dashboard.</p>
      )}
    </div>
  )
}
