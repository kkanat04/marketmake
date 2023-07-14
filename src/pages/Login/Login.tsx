import './Login.css';

import {Button, TextField} from '@mui/material';
import React from 'react';

import GoogleAuthentication from '../../components/authentication/GoogleAuthentication/GoogleAuthentication';

const Login = () => {
	return (
		<div className="authentication">
			<div className="authentication__container">
				<GoogleAuthentication />
				<p>OR</p>
				<TextField fullWidth id="outlined-basic" label="Username / Email" variant="outlined" />
				<TextField fullWidth sx={{mt: 2}} id="outlined-basic" label="Password" variant="outlined" />

				<Button fullWidth variant="contained" sx={{mt: 3, height: 40}}>Continue</Button>

			</div>
		</div>
	);
};

export default Login;
