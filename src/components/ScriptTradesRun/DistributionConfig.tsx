import { CircularProgress } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useAppSelector } from 'hooks/redux';
import React from 'react';
import { useGetLogsQuery } from 'services/query';

const DistributionConfig = () => {
	const input = useAppSelector(state => state.profile.addressInput);
	const {data, isLoading} = useGetLogsQuery({addressInput: input});
	return (
		<div className="dataScript_container_data_table">
			{!isLoading ?
				<>
					<p>DistributionConfig</p>
					<TableContainer component={Paper}>
						<Table sx={{ minWidth: 650 }} aria-label="simple table">
							<TableHead>
								<TableRow>
									{Object.keys(data.scriptTradesRun.distributionConfig)
										.filter(el => el !== 'initialTasks' && el !== 'distribution' && el !== 'unique' &&
                                data.scriptTradesRun.distributionConfig[el],
										).map((el, i) => (
											<TableCell key={i}>{el}</TableCell>
										))}
									<TableCell>Assets</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								<TableRow
									sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
								>
									{Object.keys(data.scriptTradesRun.distributionConfig)
										.filter(el => el !== 'initialTasks' && el !== 'distribution' && el !== 'unique' &&
                                data.scriptTradesRun.distributionConfig[el],
										).map((el, i) => (
											<TableCell key={i}>{data.scriptTradesRun.distributionConfig[el]}</TableCell>
										))}
									<TableCell>{data.scriptTradesRun.assets.length}</TableCell>

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

export default DistributionConfig;
