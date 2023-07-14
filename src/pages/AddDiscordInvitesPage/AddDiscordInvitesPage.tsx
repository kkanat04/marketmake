import './AddDiscordInvitesPage.css';

import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';
import {Button, CircularProgress, TextField} from '@mui/material';
import React, {useState} from 'react';

import SearchDiscordInvitesResults from '../../components/discordInvites/SearchDiscordInvitesResults/SearchDiscordInvitesResults';
import {useAddDiscordInvitesMutation} from '../../services/query';

const AddDiscordInvitesPage = () => {
	const [trigger, {data, isLoading}] = useAddDiscordInvitesMutation();
	const [inp, setInp] = useState([{
		key: '',
		value: '',
	}]);
	const [channelId, setChannelId] = useState<string>('');

	const changeInp = (prop: string, inpValue: string, index: number) => {
		setInp(prevState =>
			prevState.map((item, i) =>
				i === index
					? { ...item, [prop]: inpValue }
					: item,
			),
		);
	};

	const addInp = () => {
		setInp([...inp, {key: '', value: ''}]);
	};

	const deleteInp = (index: number) => {
		setInp(prevState => prevState.filter((_, i) => i !== index));
	};

	const send = () => {
		if (channelId && inp[0].key && inp[0].value) {
			let utm = {};
			inp.forEach(el => {
				utm = {...utm, [el['key']]: el['value']};
			});
			const body = {
				channelId,
				utm,
			};
			trigger({body});
		}
	};

	return (
		<div className="addDiscordInvitesPage">
			<div>
				<h2>New invite</h2>
				<TextField type="text"
					onChange={(e) => setChannelId(e.target.value)} sx={{mt: 2, mb: 2}} label="ChannelId" variant="outlined" />
				<div className="addDiscordInvitesPage__utm">
					<h2>Utm</h2>
					{
						inp.map((el, i) => (
							<div className="addDiscordInvitesPage__utm__el" key={i}>
								<TextField key={i} value={el.key}
									onChange={(e) => changeInp('key', e.target.value, i)} label="Name" variant="outlined" />
								<TextField key={i + 1} value={el.value}
									onChange={(e) => changeInp('value', e.target.value, i)} label="Value" variant="outlined" />
								{
									i === inp.length - 1 ?
										<Button onClick={addInp} variant="contained"><AddIcon /></Button> : null
								}
								{
									inp.length !== 1 ?
										<Button variant="contained" color="error" onClick={() => deleteInp(i)}><ClearIcon /></Button> : null
								}
							</div>
						))
					}
				</div>
				<Button onClick={send} sx={{padding: '10px 25px'}} variant="contained">Send</Button>
			</div>
			{
				!isLoading ? <SearchDiscordInvitesResults data={[data]} /> : <CircularProgress />
			}

		</div>
	);
};

export default AddDiscordInvitesPage;
