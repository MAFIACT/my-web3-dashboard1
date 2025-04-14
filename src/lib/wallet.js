import { createWeb3Modal, defaultConfig } from '@web3modal/ethers5'

export const projectId = 'YOUR_PROJECT_ID' // remplace ça par ton vrai ID Web3Modal

export const { Web3Modal, useWeb3Modal, useWeb3ModalAccount, useWeb3ModalProvider } =
  createWeb3Modal({
    ethersConfig: defaultConfig({}),
    chains: [
      {
        chainId: 8453,
        name: 'Base',
        currency: 'ETH',
        explorerUrl: 'https://basescan.org',
        rpcUrl: 'https://mainnet.base.org'
      }
    ],
    projectId,
    enableAnalytics: false
  })
