import React, { useState } from "react"

import { getWalletClient } from "@wagmi/core"
import { Client } from "@xmtp/xmtp-js"

let wallet = null
let xmtp = null
let WALLET_TO = null
let conversation = null

export default function Home() {
  const [message, setMessage] = useState("")
  const [chatMessages, setChatMessages] = useState([])
  const [currentStep, setCurrentStep] = useState(0) // To track the current step
  const [WALLET_TO, setWallet_To] = useState(
    "0x937C0d4a6294cdfa575de17382c7076b579DC176"
  )
  const [contactAddresses, setContactAddresses] = useState<string[]>([
    "0x937C0d4a6294cdfa575de17382c7076b579DC176",
  ])
  const [addContact, setAddContact] = useState("")
  const [activeIndex, setActiveIndex] = useState(0)

  async function connect_to_xmtp() {
    try {
      wallet = await getWalletClient()
      console.log(`Wallet address: ${wallet.account.address}`)

      if (!wallet) {
        console.log("Wallet is not initialized")
        return
      }

      xmtp = await Client.create(wallet, { env: "production" })
      console.log("Client created", xmtp.address)

      setCurrentStep(1) // Move to the next step
    } catch (error) {
      console.error("Error initializing wallet and client:", error)
    }
  }

  async function checkIfAddressIsOnNetwork() {
    // WALLET_TO = "0x937C0d4a6294cdfa575de17382c7076b579DC176";
    if (xmtp) {
      const isOnDevNetwork = await xmtp.canMessage(WALLET_TO)
      console.log(`Can message: ${isOnDevNetwork}`)
      setCurrentStep(2) // Move to the next step
      return isOnDevNetwork
    }
    return false
  }

  async function streamAllMessages() {
    if (xmtp) {
      for await (const message of await xmtp.conversations.streamAllMessages()) {
        console.log(
          `New message from ${message.senderAddress}: ${message.content}`
        )
        setChatMessages([
          ...chatMessages,
          { sender: message.senderAddress, content: message.content },
        ])
      }
    }
  }

  async function startNewConversation() {
    const canMessage = await checkIfAddressIsOnNetwork()
    if (!canMessage) {
      console.log("Cannot message this address. Exiting...")
      return
    }

    if (xmtp) {
      conversation = await xmtp.conversations.newConversation(WALLET_TO)
      console.log(`Conversation created with ${conversation.peerAddress}`)
      setCurrentStep(3) // Move to the next step
      const messagesInConversation = await conversation.messages()
      streamAllMessages()
    }
  }

  async function sendMessage() {
    if (conversation) {
      const sentMessage = await conversation.send(message)
      console.log(`Message sent: "${sentMessage.content}"`)
      setChatMessages([...chatMessages, { sender: "You", content: message }])
      setMessage("")
    }
  }

  const buttonStyle = {
    margin: "5px",
    padding: "10px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  }

  async function filter() {
    if (addContact != "") {
      if (
        addContact[0] == "0" &&
        (addContact[1] == "x" || addContact[1] == "X")
      ) {
        console.log("Ethereum Address")
        setContactAddresses([...contactAddresses, addContact])
      } else {
        console.log("Sending Email")
      }
    }
  }

  function handleChange(index) {
    // Set chat messages
    setActiveIndex(index)
    console.log(contactAddresses[index])
  }

  return (
    <div>
      <div>
        {currentStep === 0 && (
          <button style={buttonStyle} onClick={connect_to_xmtp}>
            Connect to xmtp
          </button>
        )}
        {currentStep === 1 && (
          <button style={buttonStyle} onClick={checkIfAddressIsOnNetwork}>
            Check Address on Network
          </button>
        )}
        {currentStep === 2 && (
          <button style={buttonStyle} onClick={startNewConversation}>
            Start New Conversation
          </button>
        )}
        {currentStep === 3 && (
          <div>
            <div
              style={{
                borderRight: "1px solid #ccc",
                borderTop: "1px solid #ccc",
                borderLeft: "1px solid #ccc",
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
                height: "500px",
                overflowY: "scroll",
                color: "white",
                display: "flex",
              }}
            >
              <div
                className="chat-addresses"
                style={{ borderRight: "4px dotted gray" }}
              >
                {contactAddresses.map((address, index) => {
                  return (
                    <div
                      key={index}
                      className={`mb-2 flex p-4 text-white ${
                        index === activeIndex ? "active" : ""
                      }`}
                      onClick={() => {
                        handleChange(index)
                      }}
                    >
                      <img
                        src={`/boredape/${index}.jpg`}
                        className="h-10 w-10 rounded-full"
                      />
                      <div className="ml-2 mt-2">
                        {address.slice(0, 8)}.....{address.slice(-8)}
                      </div>
                    </div>
                  )
                })}
              </div>
              <div className="w-full ">
                <div className="name-bar flex p-2">
                  <img
                    src="/boredape/0.jpg"
                    className="h-10 w-10 rounded-full"
                  />

                  {WALLET_TO != "" ? (
                    <div className="ml-2 mt-2">
                      {WALLET_TO.slice(0, 5)}.....{WALLET_TO.slice(-4)}
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
                {chatMessages.map((chatMessage, index) => (
                  <div key={index}>
                    <div className="box">
                      <div className="text-box">{chatMessage.content}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="input-text flex">
              <div
                className="chat-addresses mb-2"
                style={{ borderRight: "4px dotted gray" }}
              >
                <div className="text-center text-white">Add conversation</div>
                <div className="text-center">
                  <input
                    type="text"
                    className="mb-2 mt-2 w-3/4 rounded-lg bg-transparent"
                    placeholder="Enter an address or E-Mail"
                    onChange={(e) => {
                      setAddContact(e.target.value)
                    }}
                  />
                </div>
                <div className="m-auto text-center">
                  <button className="text-2xl font-bold" onClick={filter}>
                    +
                  </button>
                </div>
              </div>
              <div className="flex w-full pb-4">
                <input
                  type="text"
                  placeholder="Enter message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="input-box ml-12 w-5/6"
                />
                <div>
                  <button
                    onClick={sendMessage}
                    className="button-with-background"
                  ></button>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* <button style={buttonStyle} onClick={streamAllMessages}>streamAllMessages</button> */}
      </div>
    </div>
  )
}
