import './Unfollow.css';

import {Box, Button, CircularProgress, TextField} from '@mui/material';
import React, {FormEvent, useRef, useState} from 'react';

import {useSendUnfollowMutation} from '../../services/query';

type inpType = {
	cookie: string
	xcsrfToken: string
	accessToken: string
	csv: any
};

const Unfollow = () => {
	const ref = useRef<HTMLFormElement>(null);
	const [trigger, {isLoading, data}] = useSendUnfollowMutation();
	const [inp, setInp] = useState<inpType>({
		cookie: '',
		xcsrfToken: '',
		accessToken: '',
		csv: null,
	});

	const fileReader = new FileReader();

	const handleChange = (prop: string, value: string | File) => {
		console.log(value);
		if (prop !== 'csv') {
			if (typeof value === 'string') {
				// что бы убрать экранирование
		  setInp({...inp, [prop]: value.replaceAll('\\', '')});
			}
		}
		else {
			fileReader.onload = function (event) {
				if (event.target) {
					const csvOutput = event.target.result;
					setInp({...inp, csv: csvOutput});
				}
			};
			// @ts-ignore
			fileReader.readAsText(value);
		}
	};

	const send = (e: FormEvent<EventTarget>) => {
		e.preventDefault();
		// const formData = new FormData();
		// Object.keys(inp).forEach(el => {
		// 	// @ts-ignore
		// 	formData.append(el, inp[el] as keyof inpType);
		// });
		trigger({data: inp});
	};

	return (
		<div className="unfollow">
			<form ref={ref} onSubmit={send}>
				<TextField onChange={(e) => handleChange('cookie', e.target.value)} placeholder="Cookie" variant="outlined"/>
				<TextField onChange={(e) => handleChange('xcsrfToken', e.target.value)} placeholder="XcsrfToken" variant="outlined" />
				<TextField onChange={(e) => handleChange('accessToken', e.target.value)} placeholder="AccessToken"variant="outlined" />
				<input onChange={(e) => handleChange('csv', e.target.files ? e.target.files[0] : '')} type="file" placeholder="CSV" />
				<button>Send</button>
			</form>
			{
				!isLoading ?
					<>
						<pre>
							{JSON.stringify(data, null, 2)}
						</pre>
					</> : <CircularProgress />
			}
		</div>
	);
};

export default Unfollow;
