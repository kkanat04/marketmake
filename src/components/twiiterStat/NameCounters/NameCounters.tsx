import './NameCounters.css';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React from 'react';

type Props = {
	data: any
}

const NameCounters = ({data}: Props) => {

	if (!Object.keys(data).length) return <></>;

	return (
		<div className="nameCounters">
			<p>Name2Counters</p>
			{
				Object.keys(data).map((key, i) => (
					<div>
						<h3>{key}</h3>
						<TableContainer key={i} component={Paper}>
							<Table sx={{ minWidth: 600 }} aria-label="simple table">
								<TableHead>
									<TableRow>
										{Object.keys(data[key]).map((head, index) => (
											<TableCell key={index}>{head}</TableCell>
										))}
									</TableRow>
								</TableHead>
								<TableBody>
									<TableRow
										sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
									>
									 {Object.keys(data[key]).map((row, index) => (
											<TableCell key={index}>{data[key][row]}</TableCell>
									 ))}
									</TableRow>
								</TableBody>
							</Table>
						</TableContainer>
					</div>
				))
			}
		</div>
	);
};

export default NameCounters;
