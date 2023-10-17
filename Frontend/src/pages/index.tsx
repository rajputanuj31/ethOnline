import { ConnectButton } from "@rainbow-me/rainbowkit"
import React from "react"
import { useAccount } from 'wagmi'

export default function Home() {
  const { address } = useAccount()

  return (
    <div>
       <ConnectButton chainStatus={"none"}/>
       {address ? <p>Address from Wagmi : {address}</p> : <></>}
    </div>
  )
}

