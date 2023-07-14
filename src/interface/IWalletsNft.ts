export interface IWalletsNft {
	countTotal: number
	volume: number
	assets: Asset[]
}

export interface Asset {
	wallet: string
	collections: Collection[]
}

export interface Collection {
	info: Info
	assets: Asset2[]
}

export interface Info {
	slug: string
	contractAddress: string
	name: string
	externalUrl?: string
	telegramUrl: any
	discordUrl?: string
	twitterUsername: string
	instagramUsername: any
	wikiUrl: any
	createdDate: string
	updateTime: number
	stats: Stats
	currentSafelistStatus: string
	safelistStatuses: SafelistStatuse[]
	fees: Fees
	openSeaFees: number
	creatorFees: number
}

export interface Stats {
	num_reports: number
	one_day_average_price: number
	thirty_day_volume: number
	total_volume: number
	six_hour_sales_change: number
	one_day_volume: number
	six_hour_average_price: number
	one_hour_volume: number
	one_day_sales: number
	seven_day_volume: number
	one_day_change: number
	market_cap: number
	six_hour_difference: number
	one_hour_sales: number
	one_day_sales_change: number
	seven_day_difference: number
	total_sales: number
	thirty_day_difference: number
	one_day_difference: number
	seven_day_average_price: number
	thirty_day_average_price: number
	total_supply: number
	one_hour_sales_change: number
	seven_day_sales: number
	count: number
	average_price: number
	seven_day_change: number
	thirty_day_sales: number
	one_hour_change: number
	six_hour_volume: number
	one_hour_average_price: number
	thirty_day_change: number
	num_owners: number
	six_hour_change: number
	one_hour_difference: number
	six_hour_sales: number
	floor_price: number
}

export interface SafelistStatuse {
	status: string
	timestamp: number
}

export interface Fees {
	seller_fees: SellerFees
	opensea_fees: OpenseaFees
}

export interface SellerFees {
	'0xb80428186855c6110c6f0650a1a7fc1d205f1d51'?: number
	'0x0a01ce92a9793242bbbb40009682059ccc520640'?: number
	'0x711d4b1e50ac19eb54a591217b26a85c54af277d'?: number
	'0xac1d73afa9ec6e3551ba539d8420afc55170578f'?: number
	'0x86e5373e6ecead0db0d75dfa646ad4155c48efa6'?: number
}

export interface OpenseaFees {
	'0x0000a26b00c1f0df003000390027140000faa719': number
}

export interface Asset2 {
	tokenId: string
	price: number
	state: string
}
