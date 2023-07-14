import {Root2} from './IDiscordInvite';

export interface IDiscordInviteCustom {
	[key: string | number] : {
		[key: string | number]: Root2[]
	}
}
