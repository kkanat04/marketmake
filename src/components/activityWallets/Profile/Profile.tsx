import './Profile.css';

import React from 'react';
import {useNavigate} from 'react-router-dom';

import {Profile as IProfile} from '../../../interface/IActivityWallets';

type Props = {
	data?: IProfile
}


const Profile = ({data}: Props) => {

	const navigate = useNavigate();

	const goToProfileStat = (address: string | undefined) => () => {
		navigate(`/profile?address=${address}`);
	};
	if (!data) return <></>;

	return (
		<div className="profileActivityWallets">
			<p className="profileActivityWallets_title">Profile</p>
			<p className="profileActivityWallets_address">Address: {data?.address}</p>
			<div onClick={goToProfileStat(data?.address)} className="profileActivityWallets_profile_stat">
				<p>Profile stat</p>
			</div>
			<p>Public user name: {data?.user?.publicUsername}</p>
		</div>
	);
};

export default Profile;
