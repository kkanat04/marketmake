import {createSlice} from '@reduxjs/toolkit';

import {IDiscordInviteCustom} from '../../interface/IDiscordInviteCustom';

type initialStateType = {
	discordInvites: IDiscordInviteCustom
}

const initialState: initialStateType = {
	discordInvites: {},
};

const DiscordInvitesSlicer = createSlice({
	name: 'DiscordInvitesSlicer',
	initialState,
	reducers: {
		SET_DISCORD_INVITES(state, action) {
			const data = action.payload;
			if (data) {
				const groupedData = data.reduce((acc: any, obj: any) => {
					const channelId = obj?.channel?.channelId;
					const inviterId = obj?.inviter?.userId;
					if (!acc[channelId as any]) {
						acc[channelId] = {};
					}
					if (!acc[channelId][inviterId]) {
						acc[channelId][inviterId] = [];
					}
					acc[channelId][inviterId].push(obj);
					return acc;
				}, {});

				state.discordInvites = groupedData;
			}
		},
	},
});

export const { SET_DISCORD_INVITES } = DiscordInvitesSlicer.actions;
export default DiscordInvitesSlicer.reducer;
