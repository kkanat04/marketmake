import React from 'react';

import ActivityWallets from '../pages/ActivityWallets/ActivityWallets';
import AddDiscordInvitesPage from '../pages/AddDiscordInvitesPage/AddDiscordInvitesPage';
import Login from '../pages/Login/Login';
import NotFound from '../pages/NotFound/NotFound';
import Profile from '../pages/ProfileStat/Profile';
import Script from '../pages/Script/Script';
import SearchDiscordInvitesPage from '../pages/SearchDiscordInvitesPage/SearchDiscordInvitesPage';
import SocialInfo from '../pages/SocialInfo/SocialInfo';
import Stat from '../pages/Stat/Stat';
import Table from '../pages/Table/Table';
import TwitterStat from '../pages/TwitterStat/TwitterStat';
import Unfollow from '../pages/Unfollow/Unfollow';
import Wallets from '../pages/Wallets/Wallets';
import WalletsNft from '../pages/WalletsNft/WalletsNft';
import YourToken from '../pages/YourToken/YourToken';

type navigationDataType = {
	path: string,
	element: React.ReactNode
}

export const navigationData: navigationDataType[] = [
	{
		path: '/',
		element: <Stat />,
	},
	{
		path: '/table',
		element: <Table />,
	},
	{
		path: '/profile',
		element: <Profile />,
	},
	{
		path: '/script',
		element: <Script />,
	},
	{
		path: '/activityWallets',
		element: <ActivityWallets />,
	},
	{
		path: '/twitterStat',
		element: <TwitterStat />,
	},
	{
		path: '/authentication',
		element: <Login />,
	},
	{
		path: '/searchDiscordInvites',
		element: <SearchDiscordInvitesPage />,
	},
	{
		path: '/addDiscordInvites',
		element: <AddDiscordInvitesPage />,
	},
	{
		path: '/twitterSocialInfo',
		element: <SocialInfo />,
	},
	{
		path: '/wallets',
		element: <Wallets />,
	},
	{
		path: '/unfollow',
		element: <Unfollow />,
	},
	{
		path: '/walletsNft',
		element: <WalletsNft />,
	},
	{
		path: '/yourToken',
		element: <YourToken />,
	},
	{
		path: '*',
		element: <NotFound />,
	},
];
