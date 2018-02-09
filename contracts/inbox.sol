pragma solidity ^0.4.17;

/**
 * The contractName contract does this and that...
 */
contract Inbox {

	string public message;

	function Inbox (string initMessage) public{
		message = initMessage;
	}

	function setMessage (string customMessage) public {
		message = customMessage;
	}

}

