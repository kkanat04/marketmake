import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React from 'react';

import {useAppSelector} from '../../hooks/redux';

const TableHoc = ({data}: any) => {

	const {theme} = useAppSelector(stateRedux => stateRedux.profile);

	if (!data) return <></>;

	return (
		<div>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label="simple table">
					<TableHead sx={{backgroundColor: theme === 'dark' ? '#1E1E1E' : '#fff'}}>
						<TableRow>
							{Object.keys(data).map((el, i) => (
								<TableCell sx={{color: theme === 'dark' ? '#fff' : '#1E1E1E'}} key={i}>{el}</TableCell>
							))}
						</TableRow>
					</TableHead>
					<TableBody sx={{backgroundColor: theme === 'dark' ? '#1E1E1E' : '#fff'}}>
						<TableRow>
							{Object.keys(data).map((el, i) => (
								<TableCell sx={{color: theme === 'dark' ? '#fff' : '#1E1E1E'}} key={i}>{data[el]}</TableCell>
							))}
						</TableRow
						>
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
};

export default TableHoc;
