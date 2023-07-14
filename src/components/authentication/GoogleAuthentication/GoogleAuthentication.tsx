import './GoogleAuthentication.css';

import googleLogo from 'assets/image/googleLogo.png';
import {gapi} from 'gapi-script';
import React, {useEffect} from 'react';
import GoogleLogin from 'react-google-login';

import {useAppDispatch} from '../../../hooks/redux';
import {SET_TOKEN} from '../../../redux/slicers/Web3Slicer';

const GoogleAuthentication = () => {

	const dispatch = useAppDispatch();

	const onSuccess = async (res: any) => {
		try {
			dispatch(SET_TOKEN(res.tokenId));
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		const initClient = () => {
			gapi.client.init({
				clientId: process.env.REACT_APP_AUTH_CLIENT_ID,
				scope: '',
			});
		};
		gapi.load('client:auth2', initClient);
	}, []);

	return (
		<>
			<GoogleLogin
				clientId={`${process.env.REACT_APP_AUTH_CLIENT_ID}`}
				onSuccess={onSuccess}
				onFailure={(error) => console.log(error)}
				cookiePolicy={'single_host_origin'}
				render={renderProps => (
					<button onClick={renderProps.onClick}
						className="googleAuthentication"><img src={googleLogo} alt="googleLogo"/><span>Continue with Google</span></button>
				)}
			/>
		</>
	);
};

export default GoogleAuthentication;
