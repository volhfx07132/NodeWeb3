var Tx     = require('ethereumjs-tx') 
const Web3 = require('web3')
const web3 = new Web3("https://rinkeby.infura.io/v3/5bace1a8bb64466db9ab0b35b5273f81" ||'https://speedy-nodes-nyc.moralis.io/2cac97baa7c919b144ee567f/eth/rinkeby')

const account1 = '0x3Cb06A7709a2511e48a091979b9b68B27999AfaB'
const account2 = '0xCdA189005BFBe90bc2D518f69FfB937EcdFfB3f3'

var privateKey1 = Buffer.from('b202eca8eb24ce8fed61a6f907c16defafeb81af037333b4331f2607ed5533b0', 'hex');

web.eth.getBalance(account1, (err, balance) => {
    console.log("Balance account 1: ",balance);
})

web.eth.getBalance(account2, (err, balance) => {
    console.log("Balance account 2: ",balance);
})

web3.eth.getTransactionCount(account1,(err,txCount)=>{
    //building a transaction
	const txObject = {
		nonce:    web3.utils.toHex(txCount),
		to:       account2,
		value:    web3.utils.toHex(web3.utils.toWei('1', 'ether')),
		gasLimit: web3.utils.toHex(21000),
		gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei'))
	}

	// Sign the transaction
	const tx = new Tx(txObject)
	tx.sign(privateKey1)

	const serializedTx = tx.serialize()
	const raw = '0x' + serializedTx.toString('hex')

	// Broadcast the transaction
	web3.eth.sendSignedTransaction(raw, (err, txHash) => {
		console.log('txHash:', txHash)
	})
})
