export type IDiscordInvite = Root2[]

export interface Root2 {
	id: string
	code: string
	channel: Channel
	inviter: Inviter
	targetType: any
	targetUser: any
	approximatePresenceCount: any
	approximateMemberCount: any
	expiresAt?: string
	uses: number
	maxUses: number
	maxAge: number
	temporary: any
	createdAt: string
	utm?: any
	link: string
}

export interface Channel {
	channelId: number
	guildId: any
	position: any
	name: string
	topic: any
	nsfw: any
	lastMessageId: number
	userLimit: any
	rateLimitPerUser: any
	recipients: any
	icon: any
	ownerId: any
	applicationId: any
	parentId: number
	lastPinTimestamp: any
	rtcRegion: any
}

export interface Inviter {
	userId: number
	username: string
	discriminator: string
	avatar?: string
	banner: any
	bot?: boolean
	system: any
	mfaEnabled: any
	locale: any
	verified: any
	email: any
	flags: any
	premiumType: any
	publicFlags: any
	events: any
}
