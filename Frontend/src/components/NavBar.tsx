import { ConnectButton } from "@rainbow-me/rainbowkit"
import Link from "next/link";


function NavBar() {
    return (
        <div className="">
            <div className="bg-black mt-1 nav">
                <img src="logo.png" className="w-64 h-max ml-1 p-1" />
                <h1 style={{ color: "white", fontSize: "3rem" }}>
                <Link href="/chat">Chat</Link>
                </h1>
                <div className="mt-3 ml-auto mr-4">
                    <ConnectButton chainStatus={"none"}/>
                </div>
            </div>
        </div>

    )
}
export default NavBar
