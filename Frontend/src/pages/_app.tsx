import React from "react"
import "@rainbow-me/rainbowkit/styles.css"
import { AppProps } from "next/app"
import { WagmiConfig, configureChains, createConfig } from "wagmi"
import { mainnet, polygon, optimism, goerli, polygonMumbai } from 'wagmi/chains'
import { infuraProvider } from 'wagmi/providers/infura'

import "../styles/tailwind.scss"
import { RainbowKitProvider, getDefaultWallets, darkTheme } from "@rainbow-me/rainbowkit"
import NavBar from "@components/NavBar";



const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet, polygon, optimism, goerli, polygonMumbai],
  [infuraProvider({ apiKey: '6012178ed1b445389796a2d160b52fa9' })],
)

const { connectors } = getDefaultWallets({
  appName: "ETHonline",
  chains,
  projectId: '80524cd6d018198e7d8d6bb92e814927'
});

const wagmiConfig = createConfig({
  publicClient,
  webSocketPublicClient,
  connectors: connectors
})

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains} theme={darkTheme({
        accentColor: '#8E0000',
        accentColorForeground: 'white',
        borderRadius: 'medium',
        fontStack: 'system',
        overlayBlur: 'large',
      })}>
        <NavBar/>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  )
}

export default MyApp
