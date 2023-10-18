import { ConnectButton } from "@rainbow-me/rainbowkit"

function NavBar() {
    return (
        <div className="">
            <div className="bg-black mt-1 nav">
                <img src="logo.png" className="w-64 h-max ml-1 p-1" />
                <div className="mt-3 ml-auto mr-4">
                    <ConnectButton chainStatus={"none"}/>
                </div>
            </div>
        </div>

    )
}
export default NavBar
