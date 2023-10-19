const Abi = [
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "adId",
				"type": "bytes32"
			}
		],
		"name": "assertionDisputedCallback",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "adId",
				"type": "bytes32"
			},
			{
				"internalType": "bool",
				"name": "assertedTruthfully",
				"type": "bool"
			}
		],
		"name": "assertionResolvedCallback",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "content",
				"type": "string"
			}
		],
		"name": "createAdvertisement",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "resolveAdvertisement",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"name": "advertisements",
		"outputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "content",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "isApproved",
				"type": "bool"
			},
			{
				"internalType": "bytes32",
				"name": "assertionId",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "assertionId",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "assertionLiveness",
		"outputs": [
			{
				"internalType": "uint64",
				"name": "",
				"type": "uint64"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "defaultCurrency",
		"outputs": [
			{
				"internalType": "contract IERC20",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "defaultIdentifier",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "adId",
				"type": "bytes32"
			}
		],
		"name": "getAdvertisementContent",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAssertion",
		"outputs": [
			{
				"components": [
					{
						"components": [
							{
								"internalType": "bool",
								"name": "arbitrateViaEscalationManager",
								"type": "bool"
							},
							{
								"internalType": "bool",
								"name": "discardOracle",
								"type": "bool"
							},
							{
								"internalType": "bool",
								"name": "validateDisputers",
								"type": "bool"
							},
							{
								"internalType": "address",
								"name": "assertingCaller",
								"type": "address"
							},
							{
								"internalType": "address",
								"name": "escalationManager",
								"type": "address"
							}
						],
						"internalType": "struct OptimisticOracleV3Interface.EscalationManagerSettings",
						"name": "escalationManagerSettings",
						"type": "tuple"
					},
					{
						"internalType": "address",
						"name": "asserter",
						"type": "address"
					},
					{
						"internalType": "uint64",
						"name": "assertionTime",
						"type": "uint64"
					},
					{
						"internalType": "bool",
						"name": "settled",
						"type": "bool"
					},
					{
						"internalType": "contract IERC20",
						"name": "currency",
						"type": "address"
					},
					{
						"internalType": "uint64",
						"name": "expirationTime",
						"type": "uint64"
					},
					{
						"internalType": "bool",
						"name": "settlementResolution",
						"type": "bool"
					},
					{
						"internalType": "bytes32",
						"name": "domainId",
						"type": "bytes32"
					},
					{
						"internalType": "bytes32",
						"name": "identifier",
						"type": "bytes32"
					},
					{
						"internalType": "uint256",
						"name": "bond",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "callbackRecipient",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "disputer",
						"type": "address"
					}
				],
				"internalType": "struct OptimisticOracleV3Interface.Assertion",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAssertionId",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAssertionResult",
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
				"internalType": "bytes32",
				"name": "adId",
				"type": "bytes32"
			}
		],
		"name": "isAdvertisementApproved",
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
		"name": "oov3",
		"outputs": [
			{
				"internalType": "contract OptimisticOracleV3Interface",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

export default Abi