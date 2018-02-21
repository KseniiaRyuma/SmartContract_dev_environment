const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3'); // constractor

const provider = ganache.provider();
const web3 = new Web3(provider); // creates an instance of Web3 and tell to create a local test network that we are hosting in our machine

const { interface, bytecode } = require('../compile');


let accounts;
let inbox;
// const INITIAL_STRING = 'Hi there!'

beforeEach(async () => {
	// Get a list of all accounts
	accounts = await web3.eth.getAccounts(); // hetting eth module of web3 library

	// Use one of those accounts to deploy the contract
	inbox = await  new web3.eth.Contract(JSON.parse(interface))
		.deploy({ data: bytecode, arguments: ['Hi there!']}) // creates a transaction oject with data (compitled code for contract) amnd arguments (list of arguments that passes to the contract constractor) properties
		.send({ from: accounts[0], gas: '1000000'})

	inbox.setProvider(provider);
});

describe('Inbox', () => {
	it('deploys a contract', () => {
		assert.ok(inbox.options.address); // adress property on option object
	});

	it('has a default message', async () => {
	  const message = await inbox.methods.message().call();
	  assert.equal(message, 'Hi there!');
	});

	it('can change the massage', async () => {
		await inbox.methods.setMessage('bye').send({ from: accounts[0]});
		const message = await inbox.methods.message().call();
		assert.equal(message, 'bye');
	})
});