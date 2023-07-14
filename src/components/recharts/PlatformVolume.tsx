import {useAppDispatch, useAppSelector} from 'hooks/redux';
import React, { useEffect } from 'react';
import {
	Bar,
	BarChart,
	CartesianGrid,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from 'recharts';
import { SET_PLATFORM_VOLUME } from 'redux/slicers/ProfileSlicer';

import {memoProps} from '../../utils/memoProps';

export const PlatformVolume = ({data, state}: any) => {
	const dispatch = useAppDispatch();
	const {theme} = useAppSelector(stateRedux => stateRedux.profile);

	useEffect(() => {
		dispatch(SET_PLATFORM_VOLUME({data: state?.platform2volume}));
	}, [state]);

	console.log(state?.platform2volume);
	if (!Object.keys(state?.platform2volume).length) return <></>;

	return (
		<div style={{width: '45%', height: '50vh'}}>
			<p style={{textAlign: 'center', color: '#fff'}}>PlatformVolume</p>
			<ResponsiveContainer width="100%" height="100%">
				<BarChart
					data={data}
				>
					<XAxis tick={{stroke: theme === 'dark' ? '#fff' : '#000'}} dataKey={'name'}/>
					<CartesianGrid strokeDasharray="3 3" />
					<YAxis tick={{stroke: '#6e7126'}}/>
					<Tooltip />
					<Bar dataKey={'value'} fill="#8884d8" />
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
};

export const PlatformVolumeMemo = React.memo(PlatformVolume, memoProps);
