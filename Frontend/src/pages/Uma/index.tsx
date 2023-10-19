import React, { useEffect, useState } from "react";
import { useContractRead, useContractWrite, 
  usePrepareContractWrite,
} from "wagmi";

import abi from "../../contract/Abi";
const ad = "0x3022E5743f9B41c6DC15B3040B530EEE9B2dA0A7";

export default function Uma() {
  const [advertisementContent, setAdvertisementContent] = useState("");

  const { config: createAdvertisement } = usePrepareContractWrite({
    address: ad,
    abi: abi,
    functionName: 'createAdvertisement',
    args: ['UMA is BEST!'],
    value: 0,
  });

  const {data: createAdvertisementData, write: writeAdvertisement} = useContractWrite (createAdvertisement);

  const { config: resolveAdvertisement } = usePrepareContractWrite({
    address: ad,
    abi: abi,
    functionName: 'resolveAdvertisement',
    args: [],
  });

  const {data: resolveAdvertisementData, write: writeResolveAdvertisement} = useContractWrite(resolveAdvertisement);

  const contractRead = useContractRead({
    address: ad,
    abi: abi,
    functionName: 'getAssertionResult',
    onSuccess(data) {
      console.log(data);
    }
  });


  return (
    <div>
      <h1>SocialDApp</h1>
      <input
        type="text"
        placeholder="Enter your advertisement content"
        style={{ color: "black" }}
        value={advertisementContent}
        onChange={(e) => setAdvertisementContent(e.target.value)}
      />
      <button disabled={!writeAdvertisement} onClick={() => writeAdvertisement()}>
       Mint
      </button>
      <button disabled={!writeResolveAdvertisement} onClick={() => writeResolveAdvertisement()}>
       Resolve
      </button>
      <button >
        Get Approval
      </button>
      
    </div>
  );
}
