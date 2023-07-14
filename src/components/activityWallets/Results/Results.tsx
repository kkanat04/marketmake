import './Results.css';

import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import {TableHead} from '@mui/material';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import { useTheme } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import React from 'react';

import {Result} from '../../../interface/IActivityWallets';

type Props = {
	data?: Result[]
}

interface TablePaginationActionsProps {
	count: number;
	page: number;
	rowsPerPage: number;
	onPageChange: (
		event: React.MouseEvent<HTMLButtonElement>,
		newPage: number,
	) => void;
}

function TablePaginationActions(props: TablePaginationActionsProps) {
	const theme = useTheme();
	const { count, page, rowsPerPage, onPageChange } = props;

	const handleFirstPageButtonClick = (
		event: React.MouseEvent<HTMLButtonElement>,
	) => {
		onPageChange(event, 0);
	};

	const handleBackButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		onPageChange(event, page - 1);
	};

	const handleNextButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		onPageChange(event, page + 1);
	};

	const handleLastPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
	};

	return (
		<Box sx={{ flexShrink: 0, ml: 2.5 }}>
			<IconButton
				onClick={handleFirstPageButtonClick}
				disabled={page === 0}
				aria-label="first page"
			>
				{theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
			</IconButton>
			<IconButton
				onClick={handleBackButtonClick}
				disabled={page === 0}
				aria-label="previous page"
			>
				{theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
			</IconButton>
			<IconButton
				onClick={handleNextButtonClick}
				disabled={page >= Math.ceil(count / rowsPerPage) - 1}
				aria-label="next page"
			>
				{theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
			</IconButton>
			<IconButton
				onClick={handleLastPageButtonClick}
				disabled={page >= Math.ceil(count / rowsPerPage) - 1}
				aria-label="last page"
			>
				{theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
			</IconButton>
		</Box>
	);
}


const Results = ({data}: Props) => {

	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(5);

	// Avoid a layout jump when reaching the last page with empty rows.
	const handleChangePage = (
		event: React.MouseEvent<HTMLButtonElement> | null,
		newPage: number,
	) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};
	if (!data?.length) return <></>;

	return (
		<div className="results">
			{
				data?.map((row, index) => (
					<div className="results_day" key={index}>
						<p className="results_day_title">Day-{row.days}</p>
						<TableContainer component={Paper}>
							<Table sx={{ minWidth: 650 }} aria-label="simple table">
								<TableHead>

									<TableRow
										sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
									>
										<TableCell align={'center'}>totalResult</TableCell>
										<TableCell align={'center'}>profit</TableCell>
										<TableCell align={'center'}>loss</TableCell>
										<TableCell align={'center'}>sellsProfit</TableCell>
										<TableCell align={'center'}>sellsLoss</TableCell>
										<TableCell align={'center'}>transfers</TableCell>
										<TableCell align={'center'}>mints</TableCell>
										<TableCell align={'center'}>trades</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									<TableRow
										sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
									>
										{
											// @ts-ignore
											Object.keys(row).filter((el: string) => typeof row[el] === 'number' && el !== 'days')
												.map((el, i) => (
													// @ts-ignore
													<TableCell key={i} align="center">{row[el]}</TableCell>
												))
										}
									</TableRow>
								</TableBody>
							</Table>
						</TableContainer>
						{
							row.assets &&
              <div className="results_assets">
              	<p className="results_assets_title">Assets</p>
              	<TableContainer component={Paper}>
              		<Table sx={{ minWidth: 650 }} aria-label="simple table">
              			<TableBody>
              				{
              					(rowsPerPage > 0
              						? row?.assets.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              						: row?.assets
              					).map((el, i) => (
              						<TableRow key={i}>
              							<TableCell align={'center'}>
              								<a href={`https://opensea.io/assets/ethereum/${el.contractAddress}/${el.tokenId}`}>
              									{el.tokenId}
              								</a>
              							</TableCell>
              							<TableCell align={'center'}>{el.totalResult}</TableCell>
              							<TableCell align="center">{new Date(el.timestampFrom).toLocaleString('en-GB', {
              								hour12: false,
              							})}</TableCell>
              							<TableCell align="center">{new Date(el.timestampTo).toLocaleString('en-GB', {
              								hour12: false,
              							})}</TableCell>
              						</TableRow>
              					))}

              				{
              					page > 0 ? Math.max(0, (1 + page) * rowsPerPage - (row?.assets?.length as number)) : 0 > 0 && (
              						<TableRow style={{ height: 53 * page > 0 ? Math.max(0, (1 + page) * rowsPerPage - (row?.assets?.length as number)) : 0 }}>
              							<TableCell colSpan={6} />
              						</TableRow>
              					)
              				}
              			</TableBody>

              			<TableFooter>
              				<TableRow>
              					<TablePagination
              						rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              						colSpan={3}
              						count={row.assets.length as number}
              						rowsPerPage={rowsPerPage}
              						page={page}
              						SelectProps={{
              							inputProps: {
              								'aria-label': 'rows per page',
              							},
              							native: true,
              						}}
              						onPageChange={handleChangePage}
              						onRowsPerPageChange={handleChangeRowsPerPage}
              						ActionsComponent={TablePaginationActions}
              					/>
              				</TableRow>
              			</TableFooter>
              		</Table>
              	</TableContainer>
              </div>
						}
					</div>
				))
			}

		</div>
	);
};

export default Results;
