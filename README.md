# SmartContract_dev_environment

In order to test and deploy that contract on a Rinkeby or anu other testing network

1) Initialize nom into project: nom init
2) Install solidity compiler as nom package: npm install --save solc
3) Install local test framework mocha, local test Ethereum network geneche-cli, web3 - js library gives  programmatic access to Ethereum network - npm install --save mocha ganache-cli web3@1.0.0-beta.26
4) Use inure (https://infura.io/) in order to access Rinkeby network 
5) npm install --save truffle-hdwallet-provider  - specifyes what account to anlock for the sourse of ether and it also specify what kinda of outside note we are conneting.
