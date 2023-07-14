import './SearchDiscordInvitesPage.css';

import {CircularProgress} from '@mui/material';
import React, {useEffect} from 'react';

import SearchDiscordInvites from '../../components/discordInvites/SearchDiscordInvites/SearchDiscordInvites';
import SearchDiscordInvitesResults from '../../components/discordInvites/SearchDiscordInvitesResults/SearchDiscordInvitesResults';
import {useLazySearchDiscordInvitesQuery} from '../../services/query';

const SearchDiscordInvitesPage = () => {
	const [trigger, {data, isFetching}] = useLazySearchDiscordInvitesQuery();

	useEffect(() => {
		trigger({input: ''});
	}, []);

	console.log(isFetching);
	return (
		<div>
			<SearchDiscordInvites trigger={trigger}/>
			{
				!isFetching ? <SearchDiscordInvitesResults data={data}/> : <CircularProgress />
			}
		</div>
	);
};

export default SearchDiscordInvitesPage;
