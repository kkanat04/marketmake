export const DOMAIN = process.env.REACT_APP_BACKEND_DOMAIN as string;
export const PREFIX_COMPANY = process.env.REACT_APP_BACKEND_PREFIX as string;

export const Routes = {
	get: {
		report: '/chain/admin/nft/trending/actions/',
		stat: '/chain/admin/nft/',
		logs: '/chain/script',
		activityWallets: '/chain/wallets/activity/data',
		twitterStat: '/chain/admin/nft/twitterstat',
		searchDiscordInvites: '/chain/admin/discord/invites?searchLine=',
		wallets: '/chain/admin/wallets/',
		walletsNft: '/chain/admin/wallets/nfts',
		twitterReport: '/chain/admin/nft/twitter/',
		checkToken: '/chain/admin/check',
		usersReport: '/chain/admin/discord/guild/',
		invitesReport: '/chain/admin/discord/guild/',
	},
	post: {
		addActivityWallets: '/chain/wallets/activity/add/',
		deleteActivityWallets: '/chain/wallets/activity/remove/',
		addDiscordInvites: '/chain/admin/discord/invites',
		sendUnfollow: '/chain/admin/nft/twitter/unfollow',
		sendUnfollowMixed: '/chain/admin/nft/twitter/unfollow/mixed',
		sendUnfollowJson: '/chain/admin/nft/twitter/unfollow/json',
	},
};
