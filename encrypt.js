var Tx = require('ethereumjs-tx') 
const Web3 = require('web3')
const web3 = new Web3("https://rinkeby.infura.io/v3/5bace1a8bb64466db9ab0b35b5273f81" ||'https://speedy-nodes-nyc.moralis.io/2cac97baa7c919b144ee567f/eth/rinkeby')

var json = web3.eth.accounts.encrypt("b202eca8eb24ce8fed61a6f907c16defafeb81af037333b4331f2607ed5533b0",  "dfdfdf");
