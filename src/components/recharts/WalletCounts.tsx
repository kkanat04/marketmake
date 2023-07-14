import React from 'react';
import { Brush, CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

import {useAppSelector} from '../../hooks/redux';
import {memoProps} from '../../utils/memoProps';
import TableHoc from '../TableHoc/TableHoc';
import WalletCountsTable from '../WalletCountsTable/WalletCountsTable';

const WalletCounts = ({state}: any) => {
	const {theme} = useAppSelector(stateRedux => stateRedux.profile);
	console.log(state?.walletCounts);
	if (!state?.walletCounts?.length) return <></>;

	return (
		<div style={{width: '100%', height: '50vh',textAlign: 'center'}}>
			<p style={{color: theme === 'light' ? '#000' : '#fff'}}>Retail wallets stat</p>
			<ResponsiveContainer width="100%" height="100%">
				<LineChart
					width={500}
					height={300}
					data={state?.walletCounts}
				>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis tick={{stroke: theme === 'dark' ? '#fff' : '#000'}} dataKey="address" />
					<YAxis tick={{stroke: '#6e7126'}}/>
					<Tooltip itemStyle={{color: '#000'}}/>
					<Line type="monotone"
						dot={{stroke: 'red'}}
						dataKey="sells"
						stroke={theme === 'light' ? '#fff' : '#1E1E1E'} />
					<Line type="monotone"
						dot={{stroke: 'blue'}}
						dataKey="buys"
						stroke={theme === 'light' ? '#fff' : '#1E1E1E'} />
					<Line type="monotone"
						dot={{stroke: 'green'}}
						dataKey="mints"
						stroke={theme === 'light' ? '#fff' : '#1E1E1E'} />
					<Line type="monotone"
						dot={{stroke: 'yellow'}}
						dataKey="transfers"
						stroke={theme === 'light' ? '#fff' : '#1E1E1E'} />
					<Line type="monotone"
						dot={{stroke: 'orange'}}
						dataKey="burns"
						stroke={theme === 'light' ? '#fff' : '#1E1E1E'} />
					<Line type="monotone"
						dot={{stroke: '#8884d8'}}
						dataKey="sum"
						stroke={theme === 'light' ? '#fff' : '#1E1E1E'} />
					<Brush />
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
};

export const WalletCountsMemo = React.memo(WalletCounts, memoProps);
