import React, { useState, useEffect } from "react";
import { Client } from '@xmtp/xmtp-js';
import { getWalletClient } from '@wagmi/core'


let wallet = null;
let xmtp = null;
let WALLET_TO = null;
let conversation = null;

export default function Home() {
    const [message, setMessage] = useState('');
    const [chatMessages, setChatMessages] = useState([]);
    const [currentStep, setCurrentStep] = useState(0); // To track the current step 
    const [WALLET_TO, setWallet_To] = useState('0x937C0d4a6294cdfa575de17382c7076b579DC176')

    async function connect_to_xmtp() {
        try {
            wallet = await getWalletClient();
            console.log(`Wallet address: ${wallet.account.address}`);

            if (!wallet) {
                console.log("Wallet is not initialized");
                return;
            }

            xmtp = await Client.create(wallet, { env: "production" });
            console.log("Client created", xmtp.address);

            setCurrentStep(1); // Move to the next step
        } catch (error) {
            console.error("Error initializing wallet and client:", error);
        }
    }

    async function checkIfAddressIsOnNetwork() {
        // WALLET_TO = "0x937C0d4a6294cdfa575de17382c7076b579DC176";
        if (xmtp) {
            const isOnDevNetwork = await xmtp.canMessage(WALLET_TO);
            console.log(`Can message: ${isOnDevNetwork}`);
            setCurrentStep(2); // Move to the next step
            return isOnDevNetwork;
        }
        return false;
    }

    async function startNewConversation() {
        const canMessage = await checkIfAddressIsOnNetwork();
        if (!canMessage) {
            console.log("Cannot message this address. Exiting...");
            return;
        }

        if (xmtp) {
            conversation = await xmtp.conversations.newConversation(WALLET_TO);
            console.log(`Conversation created with ${conversation.peerAddress}`);
            setCurrentStep(3); // Move to the next step
            const messagesInConversation = await conversation.messages();
        }
    }

    async function sendMessage() {
        if (conversation) {
            const sentMessage = await conversation.send(message);
            console.log(`Message sent: "${sentMessage.content}"`);
            setChatMessages([...chatMessages, { sender: 'You', content: message }]);
            setMessage('');
        }
    }

    async function streamAllMessages() {
        if (xmtp) {
            for await (const message of await xmtp.conversations.streamAllMessages()) {
                console.log(`New message from ${message.senderAddress}: ${message.content}`);
                setChatMessages([...chatMessages, { sender: message.senderAddress, content: message.content }]);
            }
            console.log(chatMessages);

        }
    }

    function printQrCode() {
        console.log(`Generate QR code for address: ${wallet?.address}`);
    }

    const buttonStyle = {
        margin: '5px',
        padding: '10px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        cursor: 'pointer',
    };

    return (
        <div>
            <div>
                {currentStep === 0 && (
                    <button style={buttonStyle} onClick={connect_to_xmtp}>Connect to xmtp</button>
                )}
                {currentStep === 1 && (
                    <button style={buttonStyle} onClick={checkIfAddressIsOnNetwork}>Check Address on Network</button>
                )}
                {currentStep === 2 && (
                    <button style={buttonStyle} onClick={startNewConversation}>Start New Conversation</button>
                )}
                {currentStep === 3 && (
                    <div>
                        <div style={{ borderRight: '1px solid #ccc', borderTop: '1px solid #ccc', borderLeft: '1px solid #ccc', height: '300px', overflowY: 'scroll', color: "white", display: "flex" }}>
                            <div className="chat-addresses" style={{ borderRight: '4px dotted gray' }}>

                            </div>
                            <div className="w-full ">
                                <div className="flex name-bar p-2">

                                    <img src="/boredape/0.jpg" className="w-10 h-10 rounded-full" />

                                    {WALLET_TO != '' ?
                                        <div className="mt-2 ml-2">{WALLET_TO.slice(0, 5)}.....{WALLET_TO.slice(-4)}</div>
                                        :
                                        <></>
                                    }
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
                            <div className="chat-addresses mb-2" style={{ borderRight: '4px dotted gray' }}>

                            </div>
                            <div className="w-full flex pb-4" >
                                <input
                                    type="text"
                                    placeholder="Enter message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    className="input-box w-5/6 ml-12"
                                    
                                />
                                <div>

                                <button  onClick={sendMessage} className="button-with-background"></button>
                                </div>
                            </div>


                        </div>

                    </div>
                )}
                <button style={buttonStyle} onClick={streamAllMessages}>streamAllMessages</button>
            </div>
        </div>
    );
}
