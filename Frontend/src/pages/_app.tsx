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

// const { chains, publicClient, webSocketPublicClient } = configureChains(
//   [mainnet, polygon, optimism, goerli, polygonMumbai],
//   [infuraProvider({ apiKey: process.env.INFURA_API })],
// )

// const { connectors } = getDefaultWallets({
//   appName: "ETHonline",
//   chains,
//   projectId: '123'
// });

// const wagmiConfig = createConfig({
//   publicClient,
//   webSocketPublicClient,
//   connectors: connectors
// })

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  // const authClient = new LitAuthClient();
  return (
    // <WagmiConfig config={wagmiConfig}>
    //   <RainbowKitProvider chains={chains} theme={darkTheme({
    //   accentColor: '#8E0000',
    //   accentColorForeground: 'white',
    //   borderRadius: 'medium',
    //   fontStack: 'system',
    //   overlayBlur: 'large',
    // })}>
        <Component {...pageProps} />
    //    </RainbowKitProvider>
    // </WagmiConfig>
  )
}

export default MyApp
