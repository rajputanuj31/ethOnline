import React, { useState, useEffect } from "react";
import abi from "../../contract/Abi";
import { getPublicClient, getWalletClient } from '@wagmi/core';
import { ethers } from 'ethers';

const ad = "0x3022E5743f9B41c6DC15B3040B530EEE9B2dA0A7";
const ethereumChainId = 5;

export default function Uma() {
  const [web3Provider, setWeb3Provider] = useState(null);
  const [advertisementContent, setAdvertisementContent] = useState("");

  useEffect(() => {
    const publicClient = getPublicClient()
    setWeb3Provider(publicClient)

  }, [getPublicClient()])
  

  const createAdvertisement = async (content) => {

    if (!web3Provider) {
      alert("Please connect your wallet");
      return;
    }
    try {
      const walletClient = await getWalletClient({
        chainId: ethereumChainId,
      });
      const contract = new ethers.Contract(ad, abi, walletClient);
      setAdvertisementContent(content);

      // Send the transaction and get the transaction hash
      const tx = await contract.createAdvertisement(content);
      await tx.wait();
    } catch (error) {
      console.error("Error creating advertisement:", error);
    }
  };


  const resolveAd = async () => {
    if (!web3Provider) {
      alert("Please connect your wallet");
      return;
    }
    try {
      const walletClient = await getWalletClient({
        chainId: ethereumChainId,
      });
      const contract = new ethers.Contract(ad, abi, walletClient);
      const tx = await contract.resolveAdvertisement();
    } catch (error) {
      console.error("Error Resolving advertisement:", error);
    }
  };

  const check = async () => {
    if (!web3Provider) {
      alert("Please connect your wallet");
      return;
    }
    try {
      const walletClient = await getWalletClient({
        chainId: ethereumChainId,
      });
      const contract = new ethers.Contract(ad, abi, walletClient);
      const result = await contract.getAssertionResult();
      console.log("Assertion Result:", result);
      return result;
    } catch (error) {
      console.error("Error Resolving advertisement:", error);
    }
  };

  const buttonStyle = {
    margin: "5px",
    padding: "10px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  };

  return (
    <div>
      <h1>SocialDApp</h1>
      <input
        type="text"
        placeholder="Enter your advertisement content"
        style={{color:"black"}}
        value={advertisementContent}
        onChange={(e) => setAdvertisementContent(e.target.value)}
      />
      <button
        style={buttonStyle}
        onClick={() => createAdvertisement(advertisementContent)}
      >
        Create Ad
      </button>
      <button style={buttonStyle} onClick={() => resolveAd()}>
        Resolve Advertisement
      </button>
      <button style={buttonStyle} onClick={() => check()}>
        Check Result
      </button>
    </div>
  );
}
