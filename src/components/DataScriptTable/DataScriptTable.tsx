import { CircularProgress } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useAppSelector } from 'hooks/redux';
import * as React from 'react';
import { useGetLogsQuery } from 'services/query';

const columns: GridColDef[] = [
	{ field: 'message', headerName: 'Message', width: 530 },
	{ field: 'time', headerName: 'Time', width: 150 },
];

export default function DataScriptTable() {
	const input = useAppSelector(state => state.profile.addressInput);
	const {data, isLoading} = useGetLogsQuery({addressInput: input});
	return (
		<div>
			{!isLoading ?
				<div className="dataScript_container_data_table" style={{ height: 400, width: '100%' }}>
					<DataGrid
						checkboxSelection
						rows={data.logs}
						columns={columns}
						pageSize={10}
						rowsPerPageOptions={[10, 25, 50]}
					/>
				</div>
				: <CircularProgress />}
		</div>
	);
}
