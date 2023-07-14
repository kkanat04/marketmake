import {useAppDispatch, useAppSelector} from 'hooks/redux';
import React, { useEffect } from 'react';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer,Tooltip, XAxis, YAxis } from 'recharts';
import { SET_WALLETS_AGE_COUNT } from 'redux/slicers/ProfileSlicer';

import {memoProps} from '../../utils/memoProps';

const WalletsAgeCount = ({data, state}: any) => {
	const dispatch = useAppDispatch();
	const {theme} = useAppSelector(stateRedux => stateRedux.profile);

	useEffect(() => {
		dispatch(SET_WALLETS_AGE_COUNT({data: state?.walletsAge2count}));
	}, [state]);

	if (!state?.walletsAge2count) return <></>;

	return (
		<div style={{width: '45%', height: '50vh'}}>
			<p style={{textAlign: 'center', color: '#fff'}}>WalletsAgeCount (days ranges)</p>
			<ResponsiveContainer width="100%" height="100%">
				<BarChart
					data={data}
				>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis tick={{stroke: theme === 'dark' ? '#fff' : '#000'}} dataKey="name" />
					<YAxis tick={{stroke: '#6e7126'}}/>
					<Tooltip />
					<Bar dataKey="value" fill="#82ca9d" />
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
};

export const WalletsAgeCountMemo = React.memo(WalletsAgeCount, memoProps);
