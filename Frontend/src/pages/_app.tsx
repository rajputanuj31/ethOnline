import React from "react"
import "@rainbow-me/rainbowkit/styles.css"
import { AppProps } from "next/app"
import { WagmiConfig, configureChains, createConfig } from "wagmi"
import { mainnet, polygon, optimism, goerli, polygonMumbai } from 'wagmi/chains'
import { infuraProvider } from 'wagmi/providers/infura'

import "../styles/tailwind.scss"
import { RainbowKitProvider, getDefaultWallets, darkTheme } from "@rainbow-me/rainbowkit"
import { createClient } from "viem"
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { InjectedConnector } from 'wagmi/connectors/injected'

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet, polygon, optimism, goerli, polygonMumbai],
  [infuraProvider({ apiKey: process.env.INFURA_API })],
)

const { connectors } = getDefaultWallets({
  appName: "ETHonline",
  chains,
  projectId: '123'
});

const wagmiConfig = createConfig({
  publicClient,
  webSocketPublicClient,
  connectors: [
    new MetaMaskConnector({ chains }),
    new InjectedConnector({
      chains,
      options: {
        name: 'Injected',
        shimDisconnect: true,
      },
    }),
  ],  
})

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains} theme={darkTheme({
      accentColor: '#7b3fe4',
      accentColorForeground: 'white',
      borderRadius: 'medium',
      fontStack: 'system',
      overlayBlur: 'small',
    })}>
        <Component {...pageProps} />
       </RainbowKitProvider>
    </WagmiConfig>
  )
}

export default MyApp
