const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3'); // constractor
const web3 = new Web3(ganache.provider()); // creates an instance of Web3 and tell to create a local test network that we are hosting in our machine

