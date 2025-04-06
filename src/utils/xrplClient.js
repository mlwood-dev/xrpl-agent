// filepath: v:\repos\xrpl-agent\src\utils\xrplClient.js
const xrpl = require('xrpl');

const XRPL_NODE_URL = process.env.XRPL_NODE_URL || 'wss://s1.ripple.com'; // Default to the public Ripple testnet node if not set

console.log(`Connecting to XRPL node at: ${XRPL_NODE_URL}`);
if (!XRPL_NODE_URL) {
  throw new Error('XRPL_NODE_URL environment variable is not set.');
}

const xrplClient = new xrpl.Client(XRPL_NODE_URL); // Ensure this matches the library's API
xrplClient.connect().then(() => {
  console.log('Connected to XRPL node.');
}).catch((err) => {
  console.error('Failed to connect to XRPL node:', err);
});

module.exports = xrplClient;