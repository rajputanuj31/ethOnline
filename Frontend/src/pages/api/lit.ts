import { LitAuthClient } from "@lit-protocol/lit-auth-client";
import { NextApiRequest, NextApiResponse } from "next";
import { ProviderType } from '@lit-protocol/constants';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    try {
        
        const litNodeClient = new LitNodeClientNodeJs({
            litNetwork: "cayenne",
            debug: false,
        });

        await litNodeClient.connect();

        console.log(litNodeClient)

        const authClient = new LitAuthClient({
            litRelayConfig: {
                relayApiKey: process.env.LIT_RELAY_API_KEY,
            },
            litNodeClient
        });

        const session = authClient.initProvider(ProviderType.StytchOtp, {
            userId: req.body.user_id,
            appId: 'project-test-285fd300-a3eb-474c-bff3-da414178786e'
        });

        console.log("session");

        const authMethod = await session.authenticate({ 
            accessToken: req.body.session_jwt 
        });

        console.log("AuthMethod")

        const keyId = await session.getAuthMethodId(authMethod);
        console.log(keyId,'KEY ID')
        const pubkey = await session.computePublicKeyFromAuthMethod(authMethod);
        console.log("BC", pubkey)
        const data = { message: 'Its all good man' };
        res.status(200).json(data);
    } 

    catch (error) {

        res.status(500).json({ error: 'Breaking Bad' });
    
    }

}
