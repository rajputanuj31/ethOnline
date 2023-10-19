import { ConnectButton } from "@rainbow-me/rainbowkit"
import Link from "next/link";


function NavBar() {
    return (
        <div className="">
            <div className="bg-black mt-1 nav">
                <Link href="/"><img src="logo.png" className="w-64 h-max ml-1 p-1" /></Link>
                <Link href="/chat" className="nav-item ">Chat</Link>
                <Link href="/Uma" className="nav-item ">Uma</Link>
                <div className="mt-3 mr-4">
                    <ConnectButton chainStatus={"none"}/>
                </div>
            </div>
        </div>

    )
}
export default NavBar
