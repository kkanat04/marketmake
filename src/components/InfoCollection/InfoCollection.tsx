import './InfoCollection.css';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import React, { useEffect, useState } from 'react';
import validator from 'validator';

import {useAppSelector} from '../../hooks/redux';
import StatusTable from '../StatusTable/StatusTable';

export default function InfoCollection({state}: any) {
	const {theme} = useAppSelector(stateRedux => stateRedux.profile);
	const [data, setData] = useState<any>([]);
	const [fees, setFees] = useState<any>([]);
	const [data2, setData2] = useState<any>({});
	console.log(data2);
	useEffect(() => {
		if (state?.info) {
			Object.keys(state?.info).filter(el => typeof state?.info[el] === 'string' || typeof el ==='number')
				.filter(el =>  el !== 'createdDate' && el !== 'currentSafelistStatus').forEach(el => {
					setData((oldArray: any) => [...oldArray, {[el]: state?.info[el]}]);
				});
			setData2({
				createdDate: state.info.createdDate,
				currentSafelistStatus: state.info.currentSafelistStatus,
				'totalVolume (all trades)': state.totalVolume,
				uniqueWallets: state.uniqueWallets,
				uniqueRetailWallets: state.uniqueRetailWallets,
			});
			const feesKey = Object.keys(state?.info.fees);
			feesKey.forEach((key) =>{
				Object.keys(state?.info.fees[key]).forEach((el: any) => {
					setFees((oldArray: any) => [...oldArray, {
						name: key,
						hash: el,
						value: state?.info.fees[key][el],
					}]);
				});
			});
		}
	}, [state]);

	const validUrl = (el: any) => {
		if (typeof el[Object.keys(el)[0]] === 'string') {
			if (Object.keys(el)[0] === 'slug') {
				return `https://opensea.io/collection/${el[Object.keys(el)[0]]}`;
			}
			else if (validator.isURL(el[Object.keys(el)[0]])) {
				return el[Object.keys(el)[0]];
			}
			else {
				return null;
			}
		}
	};

	if (!state?.info) return <></>;

	return (
		<div className="infoCollection">

			<div className="infoCollection_info">

				<div className="infoCollection_info_head">
					{
						data.map((el: any, i: any) => (
							<p key={i}>{[Object.keys(el)[0]]}</p>
						))
					}
				</div>

				<div className="infoCollection_info_body">
					{
						data.map((el: any, i: any) => (
							<a target="_blank" href={validUrl(el)} style={{color: theme === 'dark' ? '#fff' : '#000'}} key={i} rel="noreferrer">
								{el[Object.keys(el)[0]]}
							</a>
						))
					}
				</div>

			</div>

			<div style={{display: 'flex', marginTop: 50, marginBottom: 50}}>

				<div style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', width: '60%'}}>


			 <div style={{width: '100%', display: 'flex', margin: '0 auto', color: '#fff'}}>
						<div style={{width: '50%', textAlign: 'center'}}>
							<p style={{color: '#DB3138'}}>Seller_fees</p>
							{
								fees.filter((el: any) => el.name === 'seller_fees').length ?
									fees.filter((el: any) => el.name === 'seller_fees').map((el: any, i: any) => (
										<List key={i}>
											<ListItem sx={{display: 'flex', flexDirection: 'column'}}>
												<ListItemText
													style={{textAlign: 'center', color: theme === 'dark' ? '#fff' : '#000'}}
													primary={el.value}
													secondary={el.hash}
													secondaryTypographyProps={{color: theme === 'dark' ? '#fff' : '#000'}}
												/>
											</ListItem>
										</List>
									)) : <p style={{marginTop: 30, color: theme === 'dark' ? '#fff' : '#000'}}>No info!</p>
							}

						</div>
						<div style={{width: '50%', textAlign: 'center'}}>
							<p style={{color: '#DB3138'}}>Opensea_fees</p>
							{
								fees.filter((el: any) => el.name === 'opensea_fees').length ?
									fees.filter((el: any) => el.name === 'opensea_fees').map((el: any, i: any) => (
										<List key={i}>
											<ListItem sx={{display: 'flex', flexDirection: 'column'}}>
												<ListItemText
													style={{textAlign: 'center', color: theme === 'dark' ? '#fff' : '#000'}}
													primary={el.value}
													secondary={el.hash}
													secondaryTypographyProps={{color: theme === 'dark' ? '#fff' : '#000'}}
												/>
											</ListItem>
										</List>
									)) : <p style={{marginTop: 30, color: theme === 'dark' ? '#fff' : '#000'}}>No info!</p>
							}
						</div>
			 </div>

					<div style={{width: '100%', display: 'flex', color: '#fff', marginTop: 50, flexWrap: 'wrap', justifyContent: 'center'}}>
						{
							Object.keys(data2).map((el: any, i: any) => (
								<div style={{marginBottom: 40, width: '50%', flexWrap: 'wrap', display: 'flex', flexDirection: 'column', alignItems: 'center'}} key={i}>
									<p style={{color: '#DB3138', textTransform: 'uppercase', paddingBottom: 5}}>{el}</p>
									<p style={{color: theme === 'dark' ? '#fff' : '#000'}}>{data2[el]}</p>
								</div>
							))
						}
					</div>
				</div>
				<StatusTable state={state} />
			</div>
		</div>
	);
}
