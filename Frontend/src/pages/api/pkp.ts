import { NextApiRequest, NextApiResponse } from "next";
import { PKPClient } from '@lit-protocol/pkp-client';
import { PKPWalletConnect } from '@lit-protocol/pkp-walletconnect';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    try {
        const pkpClient = new PKPClient({
            controllerAuthSig: req.body.Auth_Sig,
            pkpPubKey: req.body.pub_key,
        });

        await pkpClient.connect();
        console.log('PKP Client connected')
        const config = {
            projectId: '80524cd6d018198e7d8d6bb92e814927',
            metadata: {
                name: 'Test Lit Wallet',
                description: 'Test Lit Wallet',
                url: 'https://litprotocol.com/',
                icons: ['https://litprotocol.com/favicon.png'],
            },
        };

        const wcClient = await new PKPWalletConnect();
        console.log('Connecting to WalletConnect');
        await wcClient.initWalletConnect(config);
        console.log('Connected to wallet connect')
        await wcClient.addPKPClient(pkpClient);
        console.log('PKP client added to WalletConnect Client');

        const check =  await detectCircularReferences(wcClient);
        await res.json(check);
    }
    catch (e) {
        console.log(e)
        res.status(500).json({ error: 'Breaking Bad' });
    }

}
function detectCircularReferences(obj, seen = new WeakSet()) {
    if (typeof obj === "object" && obj !== null) {
      if (seen.has(obj)) {
        return "[Circular Reference]";
      }
      seen.add(obj);
    }
    for (const key in obj) {
      obj[key] = detectCircularReferences(obj[key], seen);
    }
    return obj;
  }       
