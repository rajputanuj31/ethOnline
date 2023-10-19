import React, { useEffect, useState } from "react"
import { createStytchUIClient } from "@stytch/nextjs/ui";
import NavBar from "@components/NavBar";
import { ProviderType } from '@lit-protocol/constants';


export default function Home() {

  const [otp, setOTP] = useState('');
  const [v_method_id, setMethodId] = useState('');
  const [user_id, set_user_id] = useState('');
  const [jwt, set_jwt] = useState('');

  const [data, setData] = useState(null);

  const client = createStytchUIClient(
    'public-token-test-fec2a42b-d51a-4e18-b032-827edd7c3e3f'
  );

  let stytchResponse;

  async function sendOTP() {
    const email: string = "ashutosh26jha@gmail.com";
    stytchResponse = await client.otps.email.loginOrCreate(
      email
    );
    setMethodId(stytchResponse.method_id);
    console.log(stytchResponse.method_id);
  }

  async function responseFrom() {
    const authResponse = await client.otps.authenticate(otp, v_method_id, { session_duration_minutes: 60 });
    const session_token = authResponse.session_token;

    set_user_id(authResponse.session.user_id);
    set_jwt(authResponse.session_jwt);
  }

  async function lit() {
    const params = {
      user_id: user_id,
      session_jwt: jwt,
    };

    fetch('/api/lit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', 
      },
      body: JSON.stringify(params), 
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
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
        <input onChange={((e) => { setOTP(e.target.value) })} className="bg-slate-500" />
      </div>
      <button onClick={lit}>
        LIT
      </button>
    </>
  )
}
