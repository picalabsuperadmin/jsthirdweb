export default {
  "name": "Godwoken Testnet v1",
  "chain": "GWT",
  "rpc": [
    "https://godwoken-testnet-v1.ckbapp.dev",
    "https://v1.testnet.godwoken.io/rpc"
  ],
  "faucets": [
    "https://testnet.bridge.godwoken.io"
  ],
  "nativeCurrency": {
    "name": "pCKB",
    "symbol": "pCKB",
    "decimals": 18
  },
  "infoURL": "https://www.nervos.org",
  "shortName": "gw-testnet-v1",
  "chainId": 71401,
  "networkId": 71401,
  "explorers": [
    {
      "name": "GWScout Explorer",
      "url": "https://gw-testnet-explorer.nervosdao.community",
      "standard": "none"
    },
    {
      "name": "GWScan Block Explorer",
      "url": "https://v1.testnet.gwscan.com",
      "standard": "none"
    }
  ],
  "testnet": true,
  "slug": "godwoken-testnet-v1"
} as const;