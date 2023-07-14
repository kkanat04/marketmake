import { CircularProgress } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useAppSelector } from 'hooks/redux';
import React, { useEffect, useState } from 'react';
import { useGetLogsQuery } from 'services/query';

const Tasks = () => {
	const [dataTrue, setDataTrue] = useState<number>(0);
	const [dataFalse, setDataFalse] = useState<number>(0);
	const input = useAppSelector(state => state.profile.addressInput);
	const {data, isLoading} = useGetLogsQuery({addressInput: input});

	useEffect(() => {
		if (data) {
			let initialTrue = data.scriptTradesRun.tasks.filter((item: any) => item.initial).length;
			setDataTrue(initialTrue);
			let initialFalse = data.scriptTradesRun.tasks.filter((item: any) => !item.initial).length;
			setDataFalse(initialFalse);
		}
	}, [data]);

	const delayToTime = (t: number) => {
		const minutes = Math.floor((t / (1000 * 60)) % 60);
		const seconds = Math.floor((t / 1000) % 60);
		return `${minutes.toString().length === 1 ? `0${minutes}` : minutes}:${seconds.toString().length === 1 ? `0${seconds}` : seconds}`;
	};

	return (
		<div className="dataScript_container_data_table">
			{!isLoading ?
				<>
					<p>Tasks</p>
					<TableContainer component={Paper}>
						<Table sx={{ minWidth: 650 }} aria-label="simple table">
							<TableHead>
								<TableRow>
									<TableCell>Tasks</TableCell>
									<TableCell>Delay</TableCell>
									<TableCell>initial (true)</TableCell>
									<TableCell>initial (false)</TableCell>
									<TableCell>Items</TableCell>
									<TableCell>InitialTasks</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								<TableRow
									sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
								>
									<TableCell>{data.scriptTradesRun.tasks.length}</TableCell>
									<TableCell>
										{delayToTime(data.scriptTradesRun.tasks.reduce((accumulator: any, currentValue: any) =>
											accumulator + currentValue.delay,
										0))}
									</TableCell>
									<TableCell>{dataTrue}</TableCell>
									<TableCell>{dataFalse}</TableCell>
									<TableCell>
										{data.scriptTradesRun.tasks.reduce((accumulator: any, currentValue: any) => accumulator + currentValue.items,
											0)}
									</TableCell>
									<TableCell>{data?.scriptTradesRun?.distributionConfig?.initialTasks.length}</TableCell>
								</TableRow>
							</TableBody>
						</Table>
					</TableContainer>
				</>
				: <CircularProgress />
			}
		</div>
	);
};

export default Tasks;
