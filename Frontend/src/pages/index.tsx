import { ConnectButton } from "@rainbow-me/rainbowkit"
import React, { useState } from "react"
import { createStytchUIClient } from "@stytch/nextjs/ui";
import { BaseProvider, LitAuthClient } from "@lit-protocol/lit-auth-client";
// import { ProviderType } from '@lit-protocol/constants';


export default function Home() {

  const [otp, setOTP] = useState('');
  const [v_method_id, setMethodId] = useState('');
  const [user_id, set_user_id] = useState('');
  const [jwt, set_jwt] = useState('');

  const client = createStytchUIClient(
    'public-token-test-fec2a42b-d51a-4e18-b032-827edd7c3e3f'
  );

  let stytchResponse;

  async function sendOTP() {

    const client = createStytchUIClient(
      'public-token-test-fec2a42b-d51a-4e18-b032-827edd7c3e3f'
    );

    const email: string = "ashutosh26jha@gmail.com";
    stytchResponse = await client.otps.email.loginOrCreate(
      email
    );
    setMethodId(stytchResponse.method_id);
    console.log(stytchResponse.method_id);
  }

  async function responseFrom() {
    const authResponse = await client.otps.authenticate(otp, v_method_id, { session_duration_minutes: 60 });
    set_user_id(authResponse.session.user_id);
    set_jwt(authResponse.session_jwt);
  }

  async function pls() {
    const authClient = new LitAuthClient({
      litRelayConfig: {
          relayApiKey: process.env.LIT_RELAY_API_KEY,
      }
    });

  }

  return (
    <>
      <div>

        <button onClick={sendOTP}>
          Send
        </button>
      </div>
      <button onClick={responseFrom}>
        Verify
      </button>
      <div>
        <input onChange={((e)=>{setOTP(e.target.value)})} className="bg-slate-500"/>
      </div>
    </>
  )
}
