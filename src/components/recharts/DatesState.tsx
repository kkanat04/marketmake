import {useAppDispatch, useAppSelector} from 'hooks/redux';
import React, { useEffect } from 'react';
import { CartesianGrid, Line, LineChart, ResponsiveContainer,Tooltip, XAxis, YAxis } from 'recharts';
import { SET_DATES_STATE } from 'redux/slicers/ProfileSlicer';

import {memoProps} from '../../utils/memoProps';
import {DateSalesActive} from './DateSalesActive';


export const DatesState = ({data, state}: any) => {
	const dispatch = useAppDispatch();
	const {theme} = useAppSelector(stateRedux => stateRedux.profile);

	useEffect(() => {
		dispatch(SET_DATES_STATE({data: state?.walletStat?.dates2stat}));
	}, [state]);

	if (!state?.walletStat?.dates2stat) return <></>;

	return (
		<>
			<div style={{width: '45%', height: '50vh'}}>
				<p style={{textAlign: 'center', color: '#fff'}}>Bot sales per day</p>
				<ResponsiveContainer width="100%" height="100%">
					<LineChart
						data={data}
					>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis tick={{stroke: theme === 'dark' ? '#fff' : '#000'}} dataKey="name" />
						<YAxis tick={{stroke: '#6e7126'}}/>
						<Tooltip />
						<Line name="count" type="monotone" dataKey="value.count" stroke="#8884d8" />
						<Line name="countMint" type="monotone" dataKey="value.countMint" stroke="#ffc658" />
					</LineChart>
				</ResponsiveContainer>
			</div>

			<div style={{width: '45%', height: '50vh'}}>
				<p style={{textAlign: 'center', color: '#fff'}}>Bot volume per day</p>
				<ResponsiveContainer width="100%" height="100%">
					<LineChart
						data={data}
					>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis tick={{stroke: theme === 'dark' ? '#fff' : '#000'}} dataKey="name" />
						<YAxis tick={{stroke: '#6e7126'}}/>
						<Tooltip />
						<Line name="volume" type="monotone" dataKey="value.volume" stroke="#82ca9d" />
						<Line name="volumeMint" type="monotone" dataKey="value.volumeMint" stroke="#ffc658" />
					</LineChart>
				</ResponsiveContainer>
			</div>
		</>
	);
};

export const DatesStateMemo = React.memo(DatesState, memoProps);
