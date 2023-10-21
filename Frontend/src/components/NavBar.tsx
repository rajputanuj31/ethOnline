import { ConnectButton } from "@rainbow-me/rainbowkit"
import Link from "next/link"

function NavBar() {
  return (
    <div className="">
      <div className="nav mt-1 bg-black">
        <Link href="/">
          <img src="logo.png" className="ml-1 h-max w-64 p-1" />
        </Link>
        <Link href="/chat" className="nav-item ">
          Chat
        </Link>
        <Link href="/Uma" className="nav-item ">
          Uma
        </Link>
        <div className="mr-4 mt-3">
          <ConnectButton chainStatus={"none"} />
        </div>
      </div>
    </div>
  )
}
export default NavBar
