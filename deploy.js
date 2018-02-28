const HDWalletProvider = require('truffle-hdwallet-provider'); // specifyes what account to anlock for the sourse of ether and it also specify what kinda of outside note we are conneting.
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider (
	'current mind mixture retire speak guitar broccoli monster reason series subway frost',
	'https://rinkeby.infura.io/2Bb7O7HmrSf2SIv9QzSY'
);

const web3 = new Web3(provider);

const deploy = async () => {
const accounts = await web3.eth.getAccounts();

console.log('Attempting to deploy from account ', accounts[0]);

const result = await new web3.eth.Contract(JSON.parse(interface))
	.deploy({ data: bytecode, arguments: ['Hi there!']})
	.send({ gas: '1000000', from: accounts[0]});

console.log('Contract deployed to',result.options.address);
};

deploy();
