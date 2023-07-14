import {useAppDispatch, useAppSelector} from 'hooks/redux';
import React, { useEffect } from 'react';
import {
	Area,
	AreaChart,
	Brush,
	CartesianGrid,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis} from 'recharts';
import { SET_DATA_SALES } from 'redux/slicers/ProfileSlicer';

import {memoProps} from '../../utils/memoProps';

export function DateSales({state, data} : any) {
	const dispatch = useAppDispatch();
	const {theme} = useAppSelector(stateRedux => stateRedux.profile);

	useEffect(() => {
		dispatch(SET_DATA_SALES({data: state?.date2sales}));
	}, [state]);

	console.log(data);

	if (!state?.date2sales) return <></>;

	return (
		<>
			<div style={{width:'95%', height: '50vh', textAlign: 'center'}}>
				<p style={{color: theme === 'light' ? '#000' : '#fff'}}>Sales per day (+ unique tokenIds per day)</p>
				<ResponsiveContainer width="100%" height="100%">
					<AreaChart
						data={data}
					>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis tick={{stroke: theme === 'dark' ? '#fff' : '#000'}} dataKey="name" />
						<YAxis tick={{stroke: '#6e7126'}}/>
						<Tooltip />
						{/* <Area type="monotone" dataKey="uniqueSalesToken" stroke="#8884d8" fill="#8884d8" />*/}
						{/* <Area type="monotone" dataKey="uniqueTransferToken" stroke="blue" fill="blue" />*/}
						{/* <Area type="monotone" dataKey="uniqueSalesWallets" stroke="#ffc658" fill="#ffc658" />*/}
						{/* <Area type="monotone" dataKey="uniqueMintWallets" stroke="#82ca9d" fill="#82ca9d" />*/}
						{/* <Area type="monotone" dataKey="uniqueBurnsWallets" stroke="orange" fill="orange" />*/}
						{/* <Area type="monotone" dataKey="uniqueTransfersWallets" stroke="green" fill="green" />*/}
						<Area type="monotone" dataKey="uniqueSalesToken" stroke="#ff00f7" fill="#ff00f7" />
						<Area type="monotone" dataKey="uniqueTransferToken" stroke="#82ca9d" fill="#82ca9d" />
						<Area type="monotone" dataKey="uniqueSalesWallets" stroke="#5a42f5" fill="#5a42f5" />
						<Area type="monotone" dataKey="uniqueMintWallets" stroke="#20B2AA" fill="#20B2AA" />
						<Area type="monotone" dataKey="uniqueBurnsWallets" stroke="#483D8B" fill="#483D8B" />
						<Area type="monotone" dataKey="uniqueTransfersWallets" stroke="#FA8072" fill="#FA8072" />
						<Brush />
					</AreaChart>
				</ResponsiveContainer>
			</div>
			<div style={{width:'45%', height: '50vh', textAlign: 'center'}}>
				<p style={{color: theme === 'light' ? '#000' : '#fff'}}>Repeated token ids</p>
				<ResponsiveContainer width="100%" height="100%">
					<AreaChart
						data={data}
					>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis tick={{stroke: theme === 'dark' ? '#fff' : '#000'}} dataKey="name" />
						<YAxis tick={{stroke: '#6e7126'}}/>
						<Tooltip />
						<Area type="monotone" dataKey="repeatedTokenIds" stroke="#569473" fill="#569473" />
						<Brush />
					</AreaChart>
				</ResponsiveContainer>
			</div>
			<div style={{width:'45%', height: '50vh', textAlign: 'center'}}>
				<p style={{color: theme === 'light' ? '#000' : '#fff'}}>Unique wallets sells</p>
				<ResponsiveContainer width="100%" height="100%">
					<AreaChart
						data={data}
					>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis tick={{stroke: theme === 'dark' ? '#fff' : '#000'}} dataKey="name" />
						<YAxis tick={{stroke: '#6e7126'}}/>
						<Tooltip />
						<Area type="monotone" dataKey="totalSales" stroke="#a6499e" fill="#a6499e" />
						<Area type="monotone" dataKey="totalBurns" stroke="green" fill="green" />
						<Area type="monotone" dataKey="totalMints" stroke="#949156" fill="#949156" />
						<Area type="monotone" dataKey="totalTransfers" stroke="#946d56" fill="#946d56" />
						<Brush />
					</AreaChart>
				</ResponsiveContainer>
			</div>


			<div style={{width:'45%', height: '50vh', textAlign: 'center'}}>
				<p style={{color: theme === 'light' ? '#000' : '#fff'}}>Volume</p>
				<ResponsiveContainer width="100%" height="100%">
					<AreaChart
						data={data}
					>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis tick={{stroke: theme === 'dark' ? '#fff' : '#000'}} dataKey="name" />
						<YAxis tick={{stroke: '#6e7126'}} dataKey="volume" />
						<Tooltip />
						<Area type="monotone" dataKey="volume" stroke="#8884d8" fill="#8884d8" />
						<Brush />
					</AreaChart>
				</ResponsiveContainer>
			</div>

			<div style={{width:'45%', height: '50vh', textAlign: 'center'}}>
				<p style={{color: theme === 'light' ? '#000' : '#fff'}}>Price</p>
				<ResponsiveContainer width="100%" height="100%">
					<AreaChart
						data={data}
					>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis tick={{stroke: theme === 'dark' ? '#fff' : '#000'}} dataKey="name" />
						<YAxis tick={{stroke: '#6e7126'}} dataKey="volume" />
						<Tooltip />
						<Area type="monotone" dataKey="maxPrice" stroke="#8884d8" fill="#8884d8" />
						<Area type="monotone" dataKey="avgPrice" stroke="#ffc658" fill="#ffc658" />
						<Area type="monotone" dataKey="minPrice" stroke="#00ff77" fill="#00ff77" />
						<Brush />
					</AreaChart>
				</ResponsiveContainer>
			</div>
		</>
	);
}

export const DateSalesMemo = React.memo(DateSales, memoProps);
