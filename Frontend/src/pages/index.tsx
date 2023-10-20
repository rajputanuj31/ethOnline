import React, { useEffect, useState } from "react";
import { createStytchUIClient } from "@stytch/nextjs/ui";
import NavBar from "@components/NavBar";
import { PKPClient } from '@lit-protocol/pkp-client';
import { checkAndSignAuthMessage } from '@lit-protocol/lit-node-client';


export default function Home() {
  const [otp, setOTP] = useState("");
  const [v_method_id, setMethodId] = useState("");
  const [user_id, setUserId] = useState("");
  const [jwt, setJwt] = useState("");
  const [pubkey, setPubkey] = useState("");
  const [email, setEmail] = useState(""); // State for the email input
  const [ethAddress, setEthAddress] = useState("");
  const [data, setData] = useState(null);
  const [pkp, setPKP] = useState(null);

  const client = createStytchUIClient(
    "public-token-test-fec2a42b-d51a-4e18-b032-827edd7c3e3f"
  );

  let stytchResponse;

  async function sendOTP() {
    stytchResponse = await client.otps.email.loginOrCreate(email); // Use the email state
    setMethodId(stytchResponse.method_id);
    console.log(stytchResponse.method_id);
  }

  async function responseFrom() {
    const authResponse = await client.otps.authenticate(otp, v_method_id, {
      session_duration_minutes: 60,
    });
    const session_token = authResponse.session_token;

    setUserId(authResponse.session.user_id);
    setJwt(authResponse.session_jwt);
  }

  useEffect(()=>{
    console.log(pkp)
  },[pkp])

  async function lit() {
    const params = {
      user_id: user_id,
      session_jwt: jwt,
    };

    fetch("/api/lit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    })
      .then((response) => response.json())
      .then((data) => {
        setPubkey(data.key);
        console.log('Data info', data.info[0])
        console.log('Data key', data.key);
        setEthAddress(data.info[0].ethAddress)
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  const getauthsig = async () => {
    const expiration = new Date(Date.now() + 1000 * 60 * 60 * 99999).toISOString();
    const authSig = await checkAndSignAuthMessage({ chain: 'ethereum', expiration: expiration });

    const params = {
      pub_key: pubkey,
      Auth_Sig: authSig,
    }
    fetch("/api/pkp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    })
      .then(async (response) => await response.json())
      .then((data) => {
        console.log('PKP Idhar',data);
        setPKP(data);
      })
      .catch((error) => {
        console.log('Error fetching data : ', error)
      })

      
  }

  return (
    <div className="centered-content">
      <div className="input-group">
        <label>Email:</label>
        <input
          type="text"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ color: "black" }}
        />
        <button onClick={sendOTP} className="action-button">Send OTP</button>
      </div>
      <div className="input-group">
        <label>OTP:</label>
        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOTP(e.target.value)}
          style={{ color: "black" }}
        />
        <button onClick={responseFrom} className="action-button">Verify</button>
      </div>
      <button onClick={lit} className="action-button">Get Public Key</button>
      {pubkey && (
        <h1 style={{ color: "white" }}>ethAddress: {ethAddress}</h1>
      )}
      {pubkey && (
        <h1 style={{ color: "white" }}>Public Key: {pubkey}</h1>
      )}
      <button className="action-button mt-4" onClick={getauthsig}>getauthsig</button>
    </div>
  );
}
