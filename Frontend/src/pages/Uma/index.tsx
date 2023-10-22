import React, { useEffect, useRef, useState } from "react"
const axios = require('axios')
const FormData = require('form-data')
const fs = require('fs').promises;
const JWT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI0MjQyZTQzYi0zODNiLTRhYjUtYWE1NC04YTc1MzIzYTY4NDQiLCJlbWFpbCI6ImFzaHV0b3NoMjZqaGFAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siaWQiOiJGUkExIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9LHsiaWQiOiJOWUMxIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6IjQ3MWM2MDYzMWQzM2QxMTg3YmUzIiwic2NvcGVkS2V5U2VjcmV0IjoiOWUwZGE3NmI1YWVjYzYyODlkMGU4ZjhjMmEzMjU3YTM5OTYyYWVlYTQ4MTZlOWFmYjI4YTY3ODExYmQ4ZDAwMCIsImlhdCI6MTY5Nzg2ODk2MX0.DbVAXteJ_vWJvrFfB1boOYiiLib3zyf8WytXCjK8_CM"
import {
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
} from "wagmi"

import abi from "../../contract/Abi"
const ad = "0x3022E5743f9B41c6DC15B3040B530EEE9B2dA0A7"

export default function Uma() {
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);
  const [ipfs, setIPFS] = useState('');
  const [showResolveButton, setShowResolveButton] = useState(false);


  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    console.log(file);
    setSelectedFile(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  useEffect(() => {
    if (selectedFile != null) {
      const handleSubmission = async () => {

        const formData = new FormData();
        formData.append('file', selectedFile)

        const metadata = JSON.stringify({
          name: 'File name',
        });
        formData.append('pinataMetadata', metadata);

        const options = JSON.stringify({
          cidVersion: 0,
        })
        formData.append('pinataOptions', options);

        try {
          const res = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", formData, {
            maxBodyLength: "Infinity",
            headers: {
              'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
              'Authorization': `Bearer ${JWT}`
            }
          });
          console.log(res.data.IpfsHash);
          setIPFS(res.data.IpfsHash);
        } catch (error) {
          console.log(error);
        }
      };
      handleSubmission();
    }
  }, selectedFile)



  const { config: createAdvertisement } = usePrepareContractWrite({
    address: ad,
    abi: abi,
    functionName: "createAdvertisement",
    args: [ipfs],
    value: 0,
  })

  const { data: createAdvertisementData, write: writeAdvertisement } =
    useContractWrite(createAdvertisement)

  const { config: resolveAdvertisement } = usePrepareContractWrite({
    address: ad,
    abi: abi,
    functionName: "resolveAdvertisement",
    args: [],
  })

  const { data: resolveAdvertisementData, write: writeResolveAdvertisement } =
    useContractWrite(resolveAdvertisement)

  const contractRead = useContractRead({
    address: ad,
    abi: abi,
    functionName: "getAssertionResult",
    onSuccess(data) {
      console.log(data)
    },
  })

  async function hello() {
    // await writeAdvertisement();
    setTimeout(() => {
      setShowResolveButton(true);
    }, 30000);
    console.log('DOne')
  }

  return (
    <div>
      <h1>SocialDApp</h1>

      <button
        disabled={!writeAdvertisement}
        onClick={() => writeAdvertisement()}
        className="action-button mt-4"
      >
        Create an ad
      </button>
     <button
        disabled={!writeResolveAdvertisement}
        onClick={() => writeResolveAdvertisement()}
        className="action-button mt-4"
      >
        Resolve
      </button>
      <button
        disabled={!writeResolveAdvertisement}
        onClick={() => contractRead}
        className="action-button mt-4"
      >
        get Result
      </button>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          margin: 'auto',
          height: '500px',
          width: '700px',
          border: '2px dashed #ccc',
          borderRadius: '5px',
          textAlign: 'center',
          cursor: 'pointer',
        }}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onClick={handleClick}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%', // Set the height to 100% of the parent div's height
          }}
        >
          {selectedFile == null ? <><p style={{ margin: 0 }} className="text-white">
            Drag and drop an image here, <br />
            or click to select a file.
          </p>
          </> : <></>}

          <input
            type="file"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={handleFileChange}
            ref={fileInputRef}
          />
        </div>
        {selectedFile && (
          <div>
            {/* <p>Selected File: {selectedFile.name}</p> */}
            <img src={URL.createObjectURL(selectedFile)} alt="Selected" className="h-fit w-fit" />
          </div>
        )}
      </div>
    </div>
  )
}
