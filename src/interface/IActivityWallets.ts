export type IActivityWallets = Root2[]

export interface Root2 {
	profile?: Profile
	lastTrades?: LastTrade[]
	ownAssets?: OwnAsset[]
	results?: Result[]
}

export interface Profile {
	address: string
	imageUrl: string
	metadata: Metadata
	user: User
	createdTime: number
	updateTime: number
	info: string
}

export interface Metadata {
	isBanned: boolean
	instagramUsername: string
	twitterUsername: string
	websiteUrl: string
}

export interface User {
	username: string
	publicUsername: string
	id: string
	favoriteAssetCount: number
	dateJoined: string
}

export interface LastTrade {
	id: string
	tradeType: string
	sell: boolean
	tx_hash: string
	timestamp: number
	seller: string
	buyer: string
	price: string
	token_id: string
	contract_address: string
	from: string
	to: string
	block_number: number
	block_hash: string
	gas_price: string
	gas_used: string
	gas_fee: number
	contract_name: string
	contract_token_id: string
	erc_type: string
	trade_symbol: string
	event_type: string
	nftscan_tx_id: string
	platform?: string
}

export interface OwnAsset {
	name?: string
	imageUrl?: string
	contractAddress: string
	tokenId: string
	lastAction?: LastAction
}

export interface LastAction {
	id: string
	tradeType: string
	sell: boolean
	tx_hash: string
	timestamp: number
	seller: string
	buyer: string
	price: string
	token_id: string
	contract_address: string
	from: string
	to: string
	block_number: number
	block_hash: string
	gas_price: string
	gas_used: string
	gas_fee: number
	contract_name: string
	contract_token_id: string
	erc_type: string
	trade_symbol: string
	event_type: string
	nftscan_tx_id: string
	platform?: string
}

export interface Result {
	days: number
	totalResult: number
	profit: number
	loss: number
	sellsProfit: number
	sellsLoss: number
	transfers: number
	mints: number
	trades: number
	assets?: Asset[]
}

export interface Asset {
	contractAddress: string
	tokenId: string
	totalResult: number
	timestampFrom: number
	timestampTo: number
	trades: Trade[]
}

export interface Trade {
	id: string
	tradeType: string
	sell: boolean
	tx_hash: string
	timestamp: number
	platform?: string
	seller: string
	buyer: string
	price: string
	token_id: string
	contract_address: string
	from: string
	to: string
	block_number: number
	block_hash: string
	gas_price: string
	gas_used: string
	gas_fee: number
	contract_name: string
	contract_token_id: string
	erc_type: string
	trade_symbol: string
	event_type: string
	nftscan_tx_id: string
}
