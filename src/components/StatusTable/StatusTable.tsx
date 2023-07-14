import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React from 'react';

import {useAppSelector} from '../../hooks/redux';

const StatusTable = ({state}: any) => {

	const {theme} = useAppSelector(stateRedux => stateRedux.profile);

	if (!state?.info?.safelistStatuses.length) return <></>;
	return (
		<Table sx={{ width: '40%', display: 'flex', justifyContent: 'center', overflowY: 'scroll'}}>
			<TableBody>
				{state?.info?.safelistStatuses.map((el: any, i: any) => (
					<TableRow
						sx={{display: 'flex', justifyContent: 'center'}}
						key={i}
					>
						<TableCell sx={{fontSize: 18, color: theme === 'dark' ? '#fff' : '#000'}}>{el.status}</TableCell>
						<TableCell sx={{fontSize: 17, color: theme === 'dark' ? '#fff' : '#000'}}>{new Date(el.timestamp).toLocaleString('en-GB', {
							hour12: false,
						})}</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
};

export default StatusTable;
