import './Wallets.css';

import {CircularProgress} from '@mui/material';
import Box from '@mui/material/Box';
import {DataGrid, GridColDef} from '@mui/x-data-grid';
import React from 'react';

import {useGetWalletsQuery} from '../../services/query';

const columns: GridColDef[] = [
	{ field: 'address', headerName: 'Address', width: 370 },
	{ field: 'balanceEth', headerName: 'balanceEth', width: 170 },
	{ field: 'balanceWei', headerName: 'balanceWei', width: 170 },
];

const Wallets = () => {
	const {data, isLoading} = useGetWalletsQuery();
	console.log(data);
	return (
		<div className="wallets">
			{
				!isLoading && data ?
					<>
						<p>balanceEth: {data.balanceEth}</p>
						<p>balanceWei: {data.balanceWei}</p>
						<Box sx={{ height: '85vh', width: '100%'}}>
							<DataGrid
								checkboxSelection
								disableSelectionOnClick
								rows={data.wallets}
								columns={columns}
								pageSize={100}
								getRowId={(row) => row.address}
								experimentalFeatures={{ newEditingApi: true }}
							/>
						</Box>
					</>
					: <CircularProgress />
			}
		</div>
	);
};

export default Wallets;
