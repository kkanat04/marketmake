import React from 'react';
import { Brush, CartesianGrid, Line, LineChart, ResponsiveContainer,Tooltip, XAxis, YAxis } from 'recharts';

import {useAppSelector} from '../../hooks/redux';
import {memoProps} from '../../utils/memoProps';

const TopStats = ({state}: any) => {
	let data = state?.topStats;
	const {theme} = useAppSelector(stateRedux => stateRedux.profile);

	// useEffect(() => {
	// 	data = data.forEach((el: any) => {
	// 		el.oneDayChange = el.oneDayChange.toFixed(3);
	// 		el.oneDayVolume = el.oneDayVolume.toFixed(3);
	// 	});
	// }, []);

	if (!state?.topStats?.length) return <></>;

	return (
		<>
			<h1 style={{width: '100%', textAlign: 'center', color: theme === 'dark' ? '#9eff00' : '#427a4c'}}>Top stats</h1>
			<div style={{width: '45%', height: '50vh', textAlign: 'center'}}>
				<p  style={{color: '#fff'}}>Floor change(eth price)</p>
				<ResponsiveContainer width="100%" height="100%">
					<LineChart
						syncId="topStats"
						data={data}
					>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis tick={{stroke: theme === 'dark' ? '#fff' : '#000'}} domain={['dataMin', 'dataMax']} dataKey="datetime" />
						<YAxis tick={{stroke: '#6e7126'}} domain={['dataMin', 'dataMax']} dataKey="place" yAxisId="right" orientation="right" />
						<YAxis tick={{stroke: '#6e7126'}} domain={['dataMin', 'dataMax']} />
						<Tooltip />
						<Line dot={false} type="monotone" yAxisId="right" dataKey="place" stroke="#FF0000" />
						<Line dot={false} type="monotone" dataKey="floorPrice" stroke="#82ca9d" />
						<Brush />
					</LineChart>
				</ResponsiveContainer>
			</div>
			<div style={{width: '45%', height: '50vh', textAlign: 'center'}}>
				<p style={{color: theme === 'light' ? '#000' : '#fff'}}>One day sales</p>
				<ResponsiveContainer width="100%" height="100%">
					<LineChart
						syncId="topStats"
						data={data}
					>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis tick={{stroke: theme === 'dark' ? '#fff' : '#000'}} domain={['dataMin', 'dataMax']} dataKey="datetime" />
						<YAxis tick={{stroke: '#6e7126'}} domain={['dataMin', 'dataMax']} dataKey="place" yAxisId="right" orientation="right" />
						<YAxis tick={{stroke: '#6e7126'}} domain={['dataMin', 'dataMax']} />
						<Tooltip />
						<Line dot={false} type="monotone" dataKey="place" stroke="#FF0000" />
						<Line dot={false} type="monotone" dataKey="oneDaySales" stroke="#82ca9d" />
						<Brush />
					</LineChart>
				</ResponsiveContainer>
			</div>

			<div style={{width: '45%', height: '50vh', textAlign: 'center'}}>
				<p style={{color: theme === 'light' ? '#000' : '#fff'}}>One day change (percents, by opensea)</p>
				<ResponsiveContainer width="100%" height="100%">
					<LineChart
						syncId="topStats"
						data={data}
					>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis tick={{stroke: theme === 'dark' ? '#fff' : '#000'}} domain={['dataMin', 'dataMax']} dataKey="datetime" />
						<YAxis tick={{stroke: '#6e7126'}} domain={['dataMin', 'dataMax']} dataKey="place" yAxisId="right" orientation="right" />
						<YAxis tick={{stroke: '#6e7126'}} />
						<Tooltip />
						<Line dot={false} type="monotone" dataKey="oneDayChange" stroke="#82ca9d" />
						<Brush />
					</LineChart>
				</ResponsiveContainer>
			</div>

			<div style={{width: '45%', height: '50vh', textAlign: 'center'}}>
				<p style={{color: theme === 'light' ? '#000' : '#fff'}}>One day volume (by opensea)</p>
				<ResponsiveContainer width="100%" height="100%">
					<LineChart
						syncId="topStats"
						data={data}
					>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis tick={{stroke: theme === 'dark' ? '#fff' : '#000'}} domain={['dataMin', 'dataMax']} dataKey="datetime" />
						<YAxis tick={{stroke: '#6e7126'}} domain={['dataMin', 'dataMax']} dataKey="place" yAxisId="right" orientation="right" />
						<YAxis tick={{stroke: '#6e7126'}} />
						<Tooltip />
						<Line dot={false} type="monotone" dataKey="oneDayVolume" stroke="#82ca9d" />
						<Brush />
					</LineChart>
				</ResponsiveContainer>
			</div>
		</>
	);
};

export default TopStats;

export const TopStatsMemo = React.memo(TopStats, memoProps);
