const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3'); // constractor
const web3 = new Web3(ganache.provider()); // creates an instance of Web3 and tell to create a local test network that we are hosting in our machine
const { interface, bytecode } = require('../compile');


let accounts;
let inbox;

beforeEach(async () => {
	// Get a list of all accounts
	accounts = await web3.eth.getAccounts(); // hetting eth module of web3 library

	// Use one of those accounts to deploy the contract
	inbox = await  new web3.eth.Contract(JSON.parse(interface))
		.deploy({ data: bytecode, arguments: ['Hi there!']})
		.send({ from: accounts[0], gas: '1000000'})
});

describe('Inbox', () => {
	it('deploys a contract', () => {
		console.log(inbox);
	});
});