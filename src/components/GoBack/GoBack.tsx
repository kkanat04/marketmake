import './GoBack.css';

import React from 'react';
import {useNavigate} from 'react-router-dom';

const GoBack = () => {

	const navigate = useNavigate();

	const goBack = () => {
		navigate('/');
	};
	return (
		<button className="profile_go_back" onClick={goBack}>Go back</button>
	);
};

export default GoBack;
