import './ActivityWallets.css';

import {CircularProgress, TextField} from '@mui/material';
import React, {useCallback, useState} from 'react';

import DeleteModal from '../../components/activityWallets/DeleteModal/DeleteModal';
import LastTrades from '../../components/activityWallets/LastTrades/LastTrades';
import OwnAssets from '../../components/activityWallets/OwnAssets/OwnAssets';
import Profile from '../../components/activityWallets/Profile/Profile';
import Results from '../../components/activityWallets/Results/Results';
import {useAppSelector} from '../../hooks/redux';
import {
	useAddActivityWalletsMutation,
	useDeleteActivityWalletsMutation,
	useGetActivityWalletsQuery,
} from '../../services/query';


const ActivityWallets = () => {
	const [addressInput, setAddressInput] = useState('');
	const [open, setOpen] = useState<string>('');
	const {isFetching, data, refetch} = useGetActivityWalletsQuery();
	const [deleteActivityWalletsTrigger, {isLoading: isLoading2}] = useDeleteActivityWalletsMutation();
	const [addActivityWalletsTrigger, {isLoading}] = useAddActivityWalletsMutation();


	const addActivityWallets = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		addActivityWalletsTrigger({addressInput}).then(_ => refetch());
	};

	const deleteActivityWallets = useCallback((addressDelete: string) => () => {
		setOpen(addressDelete);
	}, [open]);

	const changeAgree = useCallback((addressDelete: string) => {
		setOpen('');
		deleteActivityWalletsTrigger({addressInput: addressDelete}).then(_ => refetch());
	}, [open]);

	return (
		<div className="activityWallets">
			{
				isFetching ? <CircularProgress /> :
					<>
						<form className="activityWallets_form" onSubmit={(e) => addActivityWallets(e)}>
							<TextField onChange={(e) => setAddressInput(e.target.value)} id="outlined-basic" label="Address" variant="outlined" />
							<button>Add</button>
						</form>

						{
							data?.map((el, i) => (
								<div key={i}>
									<Profile data={el?.profile} />
									<OwnAssets data={el?.ownAssets} />
									<LastTrades data={el?.lastTrades} />
									<Results data={el?.results}/>
									{ el?.profile?.address &&
                  <button onClick={deleteActivityWallets(el?.profile?.address)} className="btn btn-delete">
                  	<span className="mdi mdi-delete mdi-24px"></span>
                  	<span className="mdi mdi-delete-empty mdi-24px"></span>
                  	<span>Delete</span>
                  </button>
									}
									{open === el?.profile?.address && <DeleteModal open setOpen={setOpen} el={el?.profile} changeAgree={changeAgree} />}
								</div>
							))
						}
					</>
			}
		</div>
	);
};

export default ActivityWallets;
