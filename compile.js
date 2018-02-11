const path = require('path'); // gives cross-platform compatibility
const fs = require('fs'); // reads solidity file content
const solc = require('solc');


const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');
const source = fs.readFileSync(inboxPath, 'utf8');

module.exports = solc.compile(source, 1).contracts[':Inbox'];