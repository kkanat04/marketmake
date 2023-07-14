import {CircularProgress} from '@mui/material';
import {DataGrid, GridCellParams} from '@mui/x-data-grid';
import SelectTablePrice from 'components/SelectTablePrice/SelectTablePrice';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { IReport } from 'interface/IReport';
import React, { useCallback, useEffect, useState } from 'react';
import {Link, useSearchParams} from 'react-router-dom';
import { DELETE_SELECTED_ROWS, SET_SELECTED_ROWS } from 'redux/slicers/DataTableSlicer';
import { useGetReportQuery } from 'services/query';
import validator from 'validator';

const columns = [
	{field: 'txnHash', headerName: 'txnHash', width: 200},
	{field: 'dateTime', headerName: 'dateTime', width: 170},
	{field: 'place', headerName: 'place'},
	{field: 'listed', headerName: 'listed'},
	{field: 'daySales', headerName: 'daySales'},
	{field: 'dayChange', headerName: 'dayChange'},
	{field: 'market', headerName: 'market'},
	{field: 'owners', headerName: 'owners'},
	{field: 'tokenId', headerName: 'tokenId'},
	{field: 'price', headerName: 'price'},
	{field: 'seller', headerName: 'seller', width: 380},
	{field: 'buyer', headerName: 'buyer', width: 380},
	{field: 'timestamp', headerName: 'timestamp'},
	{field: 'tradeType', headerName: 'tradeType'},
	{field: 'ens', headerName: 'ens'},
	{field: 'twitter', headerName: 'twitter'},
];

export default function DataTable() {
	const dispatch = useAppDispatch();
	const [searchParams] = useSearchParams();
	const {selectedRows} = useAppSelector(stateRedux => stateRedux.dataTable);
	const {data, isLoading} = useGetReportQuery({addressInput: searchParams.get('address') ? searchParams.get('address') as string : ''});
	const [rows, setRows] = useState<IReport[] | void>();

	useEffect(() => {
		if (data) {
			setRows(data);
		}
	}, [data]);

	const requestSearch = useCallback((searchValue: string) => {
		if (data) {
			const searchQuery = data.filter((query) => {
				return Object.keys(query).some(key =>
				// @ts-ignore
					(typeof query[key] === 'string' && query[key].includes(searchValue)) || (typeof query[key] === 'number') && query[key] === Number(searchValue));
			});
			if (searchValue.length > 0) {
				setRows(searchQuery);
			}
			else {
				setRows(data);
			}
		}
	}, [rows, data]);


	const changeSelectedRows = (params: GridCellParams) => {
		const isChecked = selectedRows.includes(params.row);
		if (!isChecked) {
			dispatch(SET_SELECTED_ROWS(params.row));
		}
		else {
			dispatch(DELETE_SELECTED_ROWS(params.row));
		}
	};

	const goToUrl = (params: GridCellParams) => {
		if (validator.isURL(params?.formattedValue)) {
			window.open(params?.formattedValue,'_blank');
		}
	};

	return (
		<div>
			{
				isLoading ? <CircularProgress /> : !data?.length ? <p>invalid address</p>
					: <>
						<div style={{alignItems: 'center', display: 'flex', flexDirection: 'column'}}>
							<Link to={'/'}>Go back</Link>
							<input placeholder="Search by txnHash" onChange={(e) => requestSearch(e.target.value)} type="text" />
							<p>{searchParams.get('address')}</p>
						</div>
						<div style={{ height: 635, width: '100%' }}>
							{data && rows ?
								<DataGrid
									checkboxSelection
									rowHeight={52}
									rows={rows}
									columns={columns}
									onCellClick={changeSelectedRows}
									autoPageSize={true}
									rowsPerPageOptions={[10, 25, 50]}
									hideFooterSelectedRowCount={true}
									disableVirtualization={true}
									headerHeight={60}
									onCellDoubleClick={goToUrl}
								/>
								: null}
							<SelectTablePrice rows={selectedRows} />
						</div>
					</>
			}
		</div>
	);
}
