import './YourToken.css';

import copy from 'assets/image/copy.svg';
import React from 'react';

import {useAppSelector} from '../../hooks/redux';

const YourToken = () => {
	const {token} = useAppSelector(state => state.web3.user.infoUser);

	const onCopy = () => {
		navigator.clipboard.writeText(token).then(() => {
			console.log('Copied!');
		});
	};

	return (
		<div className={'yourToken'}>
			<p>YOUR TOKEN: {token.substring(0, 20)}...</p>
			<img onClick={onCopy} src={copy} alt=""/>
		</div>
	);
};

export default YourToken;
