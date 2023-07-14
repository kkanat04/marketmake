import { CircularProgress } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useAppSelector } from 'hooks/redux';
import * as React from 'react';
import { useGetLogsQuery } from 'services/query';

export default function DataScriptTable2() {
	const input = useAppSelector(state => state.profile.addressInput);
	const {data, isLoading} = useGetLogsQuery({addressInput: input});
	return (
		<>
			{!isLoading ?
				<>
					<div className="dataScript_container_data_table">
						<p>Script</p>
						<TableContainer component={Paper}>
							<Table sx={{ minWidth: 650 }} aria-label="simple table">
								<TableHead>
									<TableRow>
										{Object.keys(data.script).filter(el => typeof data.script[el] === 'number' || typeof data.script[el] === 'string')
											.map((el, i) => (
												<TableCell key={i}>{el}</TableCell>
											))}
									</TableRow>
								</TableHead>
								<TableBody>
									<TableRow
										sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
									>
										{Object.keys(data.script).filter(el => typeof data.script[el] === 'number' || typeof data.script[el] === 'string')
											.map((el, i) => (
												<TableCell key={i}>{data.script[el]}</TableCell>
											))}
									</TableRow>
								</TableBody>
							</Table>
						</TableContainer>
					</div>
					<div className="dataScript_container_data_table">
						<p>Stat</p>
						<TableContainer component={Paper}>
							<Table sx={{ minWidth: 650 }} aria-label="simple table">
								<TableHead>
									<TableRow>
										{Object.keys(data.script.stat.counters).map((el, i) => (
											<TableCell key={i}>{el}</TableCell>
										))}
									</TableRow>
								</TableHead>
								<TableBody>
									<TableRow
										sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
									>
										{Object.keys(data.script.stat.counters).map((el, i) => (
											<TableCell key={i}>{data.script.stat.counters[el]}</TableCell>
										))}
									</TableRow>
								</TableBody>
							</Table>
						</TableContainer>
					</div>
				</>
				: <CircularProgress />
			}
		</>
	);
}
