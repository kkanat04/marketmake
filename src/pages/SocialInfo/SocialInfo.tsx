import React, {useCallback, useState} from 'react';
import {GoogleLoginButton, TwitterLoginButton} from 'react-social-login-buttons';
import {IResolveParams, LoginSocialGoogle, LoginSocialTwitter} from 'reactjs-social-login';

import {UserTwitter} from '../../components/twitterSocialInfo/UserTwitter/UserTwitter';
import {twitterScope} from '../../utils/constants';


const SocialInfo = () => {
	const [providerUser, setProviderUser] = useState('');
	const [profile, setProfile] = useState<any>();

	const onLoginStart = useCallback(() => {
		alert('login start');
	}, []);

	const onLogoutSuccess = useCallback(() => {
		setProfile(null);
		setProviderUser('');
		alert('logout success');
	}, []);

	const onLogout = useCallback(() => {}, []);

	return (
		<div>
			{providerUser && profile && (
				<UserTwitter provider={providerUser} profile={profile} onLogout={onLogout} />
			)}
			{
				!providerUser && !profile && (
					<>
						<LoginSocialTwitter
							client_id={process.env.REACT_APP_TWITTER_V2_APP_KEY as string}
							scope={twitterScope}
							redirect_uri={'http://localhost:3000/twitterSocialInfo'}
							onLoginStart={onLoginStart}
							onLogoutSuccess={onLogoutSuccess}
							onResolve={({ provider, data }: IResolveParams) => {
								setProviderUser(provider);
								setProfile(data);
							}}
							onReject={(err: any) => {
								console.log(err);
							}}
						>
							<TwitterLoginButton />
						</LoginSocialTwitter>
						<LoginSocialGoogle
							client_id={process.env.REACT_APP_AUTH_CLIENT_ID || ''}
							onLoginStart={onLoginStart}
							redirect_uri={'http://localhost:3000/twitterSocialInfo'}
							scope="openid profile email"
							discoveryDocs="claims_supported"
							access_type="offline"
							onResolve={({ provider, data }: IResolveParams) => {
								setProviderUser(provider);
								setProfile(data);
							}}
							onReject={err => {
								console.log(err);
							}}
						>
							<GoogleLoginButton />
						</LoginSocialGoogle>
					</>
				)
			}
		</div>
	);
};

export default SocialInfo;
