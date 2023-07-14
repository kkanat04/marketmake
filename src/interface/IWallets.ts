export interface IWallets {
	balanceWei: number
	balanceEth: string
	wallets: Wallet[]
}

export interface Wallet {
	address: string
	balanceWei: number
	balanceEth: string
}
