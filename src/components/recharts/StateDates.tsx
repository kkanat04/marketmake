import {useAppDispatch, useAppSelector} from 'hooks/redux';
import React, { useEffect } from 'react';
import { CartesianGrid, Line, LineChart, ResponsiveContainer,Tooltip, XAxis, YAxis } from 'recharts';
import { SET_STATE_DATES } from 'redux/slicers/ProfileSlicer';

import {memoProps} from '../../utils/memoProps';

export const StateDates = ({data, state}: any) => {
	const {theme} = useAppSelector(stateRedux => stateRedux.profile);

	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(SET_STATE_DATES({data: state?.walletStat?.state2date2count}));
	}, [state]);

	if (!state?.walletStat?.state2date2count) return <></>;

	return (
		<div style={{width: '45%', height: '50vh'}}>
			<p style={{textAlign: 'center', color: '#fff'}}>Transactions per day</p>
			<ResponsiveContainer width="100%" height="100%">
				<LineChart
					data={data}
				>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis tick={{stroke: theme === 'dark' ? '#fff' : '#000'}} dataKey="name" />
					<YAxis tick={{stroke: '#6e7126'}} />
					<Tooltip />
					<Line type="monotone" dataKey="SOLD" stroke="#8884d8" />
					<Line type="monotone" dataKey="SELLS" stroke="#82ca9d" />
					<Line type="monotone" dataKey="OWNS" stroke="#ffc658" />
					<Line type="monotone" dataKey="MINT" stroke="#51FF00" />
					<Line type="monotone" dataKey="TRANSFER" stroke="#FF0042" />
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
};

export const StateDatesMemo = React.memo(StateDates, memoProps);
