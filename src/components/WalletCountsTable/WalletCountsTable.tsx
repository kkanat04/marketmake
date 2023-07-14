import './WalletCountsTable.css';

import { styled } from '@mui/material/styles';
import {DataGrid, GridColDef} from '@mui/x-data-grid';
import React from 'react';

import {useAppSelector} from '../../hooks/redux';

const columns: GridColDef[] = [
	{ field: 'address', headerName: 'Address', width: 500 },
	{ field: 'sells', headerName: 'Sells'},
	{ field: 'buys', headerName: 'Buys'},
	{ field: 'mints', headerName: 'Mints'},
	{ field: 'transfers', headerName: 'Transfers'},
	{ field: 'burns', headerName: 'Burns'},
	{ field: 'sum', headerName: 'Sum'},
	{ field: 'buys', headerName: 'Buys'},
];

const WalletCountsTable = ({data}: any) => {
	const {theme} = useAppSelector(state => state.profile);
	if (!data) return <></>;
	const CustomizedDataGrid = styled(DataGrid)`
  color: ${theme === 'dark' ? '#fff' : '#000'} !important;
  & .MuiToolbar-root {
    color: ${theme === 'dark' ? '#fff' : '#000'} !important;
  }
`;
	return (
		<div style={{width: '100%', height: 500}}>
			<CustomizedDataGrid
				sx={{color: theme === 'dark' ? '#fff' : '#000'}}
				rows={data}
				columns={columns}
				rowsPerPageOptions={[5, 20, 50]}
			/>
		</div>
	);
};

export default WalletCountsTable;
