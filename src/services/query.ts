import {
	BaseQueryFn,
	createApi,
	FetchArgs,
	fetchBaseQuery,
	FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react';
import { IReport } from 'interface/IReport';

import { DOMAIN, PREFIX_COMPANY, Routes } from '../api';
import {IActivityWallets} from '../interface/IActivityWallets';
import {IDiscordInvite} from '../interface/IDiscordInvite';
import {IWallets} from '../interface/IWallets';
import {IWalletsNft} from '../interface/IWalletsNft';
import {SET_TOKEN} from '../redux/slicers/Web3Slicer';
import {RootState} from '../redux/store';

type bodyAddDiscord = {
	channelId: string,
	utm: any
}

type getReportType = {
	addressInput: string
}
type getStatType = {
	input: string,
	checkBox: boolean
}

type getLogsType = {
	addressInput: string
}
type searchDiscordInvitesType = {
	input: string,
}

type addDiscordInvitesType = {
	body: bodyAddDiscord
}

type sendUnfollowType = {
	data: any
}

const baseQuery = fetchBaseQuery({
	baseUrl: DOMAIN + PREFIX_COMPANY,
	prepareHeaders: (headers, { getState, endpoint }) => {
		const user = (getState() as RootState).web3.user.infoUser;

		if (user && endpoint !== 'refresh') {
			headers.set('Authorization', `Bearer ${user.token}`);
		}
		if (headers)
			return headers;
	},
	credentials: 'same-origin',
});

const baseQueryWithRauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
	args,
	api,
	extraOptions,
) => {
	let result = await baseQuery(args, api, extraOptions);

	if (result.error && result.error.status === 401) {
		api.dispatch(SET_TOKEN(''));
	}
	return result;
};


export const marketmakeApi = createApi({
	reducerPath: 'newProject',
	baseQuery: baseQueryWithRauth,
	endpoints: (builder) => ({
		getReport: builder.query<IReport[], getReportType>({
			query: ({addressInput}) => `${Routes.get.report}${addressInput}/report/json`,
		}),
		getStat: builder.query<any, getStatType>({
			query: ({input}) => `${Routes.get.stat}${input}/stat`,
		}),
		getLogs: builder.query<any, getLogsType>({
			query: ({addressInput}) => `${Routes.get.logs}/${addressInput}/log`,
		}),
		getActivityWallets: builder.query<IActivityWallets, void>({
			query: () => Routes.get.activityWallets,
		}),
		addActivityWallets: builder.mutation<IActivityWallets, getReportType>({
			query: ({addressInput}) => (
				{
					url: `${Routes.post.addActivityWallets}${addressInput}`,
					method: 'POST',
				}
			),
		}),
		deleteActivityWallets: builder.mutation<IActivityWallets, getReportType>({
			query: ({addressInput}) => (
				{
					url: `${Routes.post.deleteActivityWallets}${addressInput}`,
					method: 'POST',
				}
			),
		}),
		getTwitterStat: builder.query<any, void>({
			query: () => Routes.get.twitterStat,
		}),
		searchDiscordInvites: builder.query<IDiscordInvite, searchDiscordInvitesType>({
			query: ({input}) => `${Routes.get.searchDiscordInvites}${input}`,
		}),
		exportActionCSV: builder.query<any, {addressInput: string}>({
			query: ({addressInput}) => (
				{
					url: `${Routes.get.report}${addressInput}/report?forceTwitter=true&ownTweets=true&ownMention=true`,
					headers: {
						'Content-Type': 'application/octet-stream',

					},
					responseHandler: ((response) => response.blob()),
				}
			),
		}),
		addDiscordInvites: builder.mutation<any, addDiscordInvitesType>({
			query: ({body}) => (
				{
					url: Routes.post.addDiscordInvites,
					method: 'POST',
					body,
				}
			),
		}),
		getWallets: builder.query<IWallets, void>({
			query: () => Routes.get.wallets,
		}),
		sendUnfollow: builder.mutation<any, sendUnfollowType>({
			query: ({data}) => {
				console.log(data);
				return (
					{
						url: Routes.post.sendUnfollowJson,
						method: 'POST',
						body: data,
					}
				);},
		}),
		getWalletsNft: builder.query<IWalletsNft, void>({
			query: () => Routes.get.walletsNft,
		}),
		twitterReport: builder.query<any, string>({
			query: (address) => (
				{
					url: `${Routes.get.twitterReport}${address}/followers/report`,
					headers: {
						'Content-Type': 'application/octet-stream',

					},
					responseHandler: ((response) => response.blob()),
				}
			),
		}),
		usersReport: builder.query<any, string>({
			query: (address) => (
				{
					url: `${Routes.get.usersReport}${address}/users/report`,
					headers: {
						'Content-Type': 'application/octet-stream',

					},
					responseHandler: ((response) => response.blob()),
				}
			),
		}),
		invitesReport: builder.query<any, string>({
			query: (address) => (
				{
					url: `${Routes.get.invitesReport}${address}/invites/report`,
					headers: {
						'Content-Type': 'application/octet-stream',

					},
					responseHandler: ((response) => response.blob()),
				}
			),
		}),
		checkToken: builder.query<void, void>({
			query: () => Routes.get.checkToken,
		}),
	}),
});

export const { useLazyCheckTokenQuery ,useLazyTwitterReportQuery ,useGetWalletsNftQuery, useSendUnfollowMutation, useGetWalletsQuery, useAddDiscordInvitesMutation,
	useLazyExportActionCSVQuery ,useLazySearchDiscordInvitesQuery, useGetTwitterStatQuery, useGetReportQuery, useDeleteActivityWalletsMutation,
	useGetActivityWalletsQuery, useLazyGetStatQuery, useGetLogsQuery, useGetStatQuery,useLazyGetLogsQuery, useAddActivityWalletsMutation,
	useLazyUsersReportQuery, useLazyInvitesReportQuery } = marketmakeApi;
