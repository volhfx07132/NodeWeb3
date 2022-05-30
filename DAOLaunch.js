var Tx = require('ethereumjs-tx') 
const Web3 = require('web3')
// Rinkeby
// const web3 = new Web3("https://rinkeby.infura.io/v3/5bace1a8bb64466db9ab0b35b5273f81" ||'https://speedy-nodes-nyc.moralis.io/2cac97baa7c919b144ee567f/eth/rinkeby');
// Ethreum
// const web3 = new Web3("https://speedy-nodes-nyc.moralis.io/2cac97baa7c919b144ee567f/eth/mainnet");
// BNB mainnet
const web3 = new Web3("https://speedy-nodes-nyc.moralis.io/2cac97baa7c919b144ee567f/bsc/mainnet");
// BNB testnet
// const web3 = new Web3("https://speedy-nodes-nyc.moralis.io/2cac97baa7c919b144ee567f/bsc/testnet");

const account1 = '0x96B18a23114003902c7ee6b998037ACbD1B4332b';
const addressContract = "0x9499d327312c709ed2dee30010B2d4eb1E76e412";
var privateKey1 = Buffer.from('bfb16b7a1f7d5623d902791b61747a9e5b9f9b40a7fd247bfbcdd4a3e844fbad', 'hex');
const abi = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_presaleGenerator",
				"type": "address"
			},
			{
				"internalType": "address[]",
				"name": "_admins",
				"type": "address[]"
			}
		],
		"stateMutability": "payable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "BUYERS",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "baseDeposited",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "tokensOwed",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "lastWithdraw",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "totalTokenWithdraw",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "isWithdrawnBase",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "BUYER_REFUND",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "CALLER",
		"outputs": [
			{
				"internalType": "address payable",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "DAOLAUNCH_DEV",
		"outputs": [
			{
				"internalType": "address payable",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "GAS_LIMIT",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "transferPresaleOwner",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "listOnUniswap",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "PERCENT_FEE",
		"outputs": [
			{
				"internalType": "uint16",
				"name": "",
				"type": "uint16"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "PRESALE_FEE_INFO",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "DAOLAUNCH_BASE_FEE",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "DAOLAUNCH_TOKEN_FEE",
				"type": "uint256"
			},
			{
				"internalType": "address payable",
				"name": "BASE_FEE_ADDRESS",
				"type": "address"
			},
			{
				"internalType": "address payable",
				"name": "TOKEN_FEE_ADDRESS",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "PRESALE_GENERATOR",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "PRESALE_LOCK_FORWARDER",
		"outputs": [
			{
				"internalType": "contract IPresaleLockForwarder",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "PRESALE_SETTINGS",
		"outputs": [
			{
				"internalType": "contract IPresaleSettings",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "REFUND_INFO",
		"outputs": [
			{
				"internalType": "bool",
				"name": "isRefund",
				"type": "bool"
			},
			{
				"internalType": "uint256",
				"name": "refundFee",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "refundTime",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "STATUS",
		"outputs": [
			{
				"internalType": "bool",
				"name": "WHITELIST_ONLY",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "LIST_ON_UNISWAP",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "IS_TRANSFERED_FEE",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "IS_OWNER_WITHDRAWN",
				"type": "bool"
			},
			{
				"internalType": "uint256",
				"name": "TOTAL_BASE_COLLECTED",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "TOTAL_TOKENS_SOLD",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "TOTAL_TOKENS_WITHDRAWN",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "TOTAL_BASE_WITHDRAWN",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "NUM_BUYERS",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "TOTAL_FEE",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "TOTAL_TOKENS_REFUNDED",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "UNI_FACTORY",
		"outputs": [
			{
				"internalType": "contract IUniswapV2Factory",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "USER_FEES",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "VESTING_INFO",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "vestingTime",
				"type": "uint256"
			},
			{
				"internalType": "uint32",
				"name": "unlockRate",
				"type": "uint32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "WETH",
		"outputs": [
			{
				"internalType": "contract IWETH",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "admins",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bool",
				"name": "_flag",
				"type": "bool"
			},
			{
				"internalType": "uint256",
				"name": "_maxSpend",
				"type": "uint256"
			}
		],
		"name": "changePresaleType",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "finalize",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address payable",
				"name": "_presaleOwner",
				"type": "address"
			},
			{
				"internalType": "uint256[11]",
				"name": "data",
				"type": "uint256[11]"
			}
		],
		"name": "init1",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "contract IERC20Custom",
				"name": "_baseToken",
				"type": "address"
			},
			{
				"internalType": "contract IERC20Custom",
				"name": "_presaleToken",
				"type": "address"
			},
			{
				"internalType": "uint256[3]",
				"name": "data",
				"type": "uint256[3]"
			},
			{
				"internalType": "address payable",
				"name": "_baseFeeAddress",
				"type": "address"
			},
			{
				"internalType": "address payable",
				"name": "_tokenFeeAddress",
				"type": "address"
			}
		],
		"name": "init2",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bool",
				"name": "is_white_list",
				"type": "bool"
			},
			{
				"internalType": "address payable",
				"name": "_caller",
				"type": "address"
			},
			{
				"internalType": "uint8",
				"name": "_addLP",
				"type": "uint8"
			},
			{
				"internalType": "uint16",
				"name": "_percentFee",
				"type": "uint16"
			},
			{
				"internalType": "bool",
				"name": "_isRefund",
				"type": "bool"
			},
			{
				"internalType": "uint256",
				"name": "_refundFee",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_refundTime",
				"type": "uint256"
			},
			{
				"internalType": "uint256[]",
				"name": "_refundTimes",
				"type": "uint256[]"
			},
			{
				"internalType": "uint32[]",
				"name": "_unlockRates",
				"type": "uint32[]"
			}
		],
		"name": "init3",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "listOnUniswap",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "ownerRefundTokens",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "ownerWithdrawTokens",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "presaleStatus",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bool",
				"name": "_flag",
				"type": "bool"
			}
		],
		"name": "setWhitelistFlag",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_transferPresaleOwner",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_listOnUniswap",
				"type": "uint256"
			}
		],
		"name": "updateGasLimit",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_listOnUniswap",
				"type": "uint256"
			}
		],
		"name": "updateListingTime",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_maxSpend",
				"type": "uint256"
			}
		],
		"name": "updateMaxSpendLimit",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bool",
				"name": "_isUpdateListingTime",
				"type": "bool"
			},
			{
				"internalType": "uint256",
				"name": "_listOnUniswap",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "_isUpdateWhitelist",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "_flag",
				"type": "bool"
			},
			{
				"internalType": "uint256",
				"name": "_maxSpend",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "_isUpdateVesting",
				"type": "bool"
			},
			{
				"internalType": "uint256[]",
				"name": "_vestingTimes",
				"type": "uint256[]"
			},
			{
				"internalType": "uint32[]",
				"name": "_unlockRates",
				"type": "uint32[]"
			},
			{
				"internalType": "bool",
				"name": "_isUpdateRefund",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "_isRefund",
				"type": "bool"
			},
			{
				"internalType": "uint256",
				"name": "_fee",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_time",
				"type": "uint256"
			}
		],
		"name": "updatePresale",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			},
			{
				"internalType": "uint8",
				"name": "_v",
				"type": "uint8"
			},
			{
				"internalType": "bytes32",
				"name": "_r",
				"type": "bytes32"
			},
			{
				"internalType": "bytes32",
				"name": "_s",
				"type": "bytes32"
			}
		],
		"name": "userDeposit",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "userRefundTokens",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "userWithdrawBaseTokens",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "userWithdrawTokens",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]
var contract = new web3.eth.Contract(abi, addressContract);

function getVestingPeriodPerTime(_index){
    contract.methods.VESTING_INFO(_index).call((err, result) => {
        console.log(result);
    })
}

function getStatusOfAdminAddress(_address){
    contract.methods.admins(_address).call((err, result) => {
        console.log(result);
    })
}

function getBuyerRefundInformation(_address){
    //0x96b18a23114003902c7ee6b998037acbd1b4332b
    contract.methods.BUYER_REFUND(_address).call((err, result) => {
        console.log(result);
    })
}

function getCallerAddress(){
    contract.methods.CALLER().call((err, result) => {
        console.log(result);
    })
}

function getDaoLaunchDev() {
    contract.methods.DAOLAUNCH_DEV().call((err, result) => {
        console.log(result);
    })
}

function getGasLimit() {
    contract.methods.GAS_LIMIT().call((err, result) => {
        console.log(result);
    })
}

function getPercentFee() {
    contract.methods.PERCENT_FEE().call((err, result) => {
        console.log(result);
    })
}

function getPresaleFeeInformation() {
    contract.methods.PRESALE_FEE_INFO().call((err, result) => {
        console.log(result);
    })
}

function getPresaleGenator() {
    contract.methods.PRESALE_GENERATOR().call((err, result) => {
        console.log(result);
    })
}

function getPresaleLockForwords() {
    contract.methods.PRESALE_LOCK_FORWARDER().call((err, result) => {
        console.log(result);
    })
}

function getPresaleSeeting() {
    contract.methods.PRESALE_SETTINGS().call((err, result) => {
        console.log(result);
    })
}

function getPresaleStatus() {
    contract.methods.presaleStatus().call((err, result) => {
        console.log(result);
    })
}

function getRefundInfomation() {
    contract.methods.REFUND_INFO().call((err, result) => {
        console.log(result);
    })
}

function getStatusOFToekn

getRefundInfomation();
