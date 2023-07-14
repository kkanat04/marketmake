import './SearchDiscordInvites.css';

import {Button, TextField } from '@mui/material';
import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

type Props = {
	trigger: ({input}: {input: string}) => void
}

const SearchDiscordInvites = ({trigger}: Props) => {
	const navigate = useNavigate();
	const [input, setInput] = useState<string>('');

	const search = () => {
		trigger({input});
	};

	return (
		<div className="searchDiscordInvites">
			<Button onClick={() => navigate('/addDiscordInvites')} variant="contained">ADD</Button>
			<TextField onChange={(e) => setInput(e.target.value)} id="outlined-basic" label="Search line" variant="outlined" />
			<Button onClick={search} variant="contained">Search</Button>
		</div>
	);
};

export default SearchDiscordInvites;
