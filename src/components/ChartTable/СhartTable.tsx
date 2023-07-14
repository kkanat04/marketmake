import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React from 'react';

import {useAppSelector} from '../../hooks/redux';

const ChartTable = ({state}: any) => {
	const {theme} = useAppSelector(stateRedux => stateRedux.profile);
	if (!(state?.walletStat) && state?.totalVolume) return <></>;
	return (
		<div>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label="simple table">
					<TableHead>
						<TableRow>
							{Object.keys(state?.walletStat).filter(el => typeof state?.walletStat[el] === 'number').map((el, i) => (
								<TableCell key={i}>{el === 'sum' ?
									'bot trades volume' : el === 'totalTxns' ?
								 'bot trades and mints': el === 'sumOwn' ? 'nft volume own' : el === 'totalOwn' ? 'nfts own':
								 el === 'sumMint' ? 'mints volume' : el === 'totalMints' ? 'mints count' : el
								 }</TableCell>
							))}
						</TableRow>
					</TableHead>
					<TableBody>
						<TableRow
							sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
						>
							{Object.keys(state.walletStat).filter(el => typeof state?.walletStat[el] === 'number').map((el, i) => (
								<TableCell key={i}>{Number.isInteger(state?.walletStat[el]) ?
									state?.walletStat[el] : state?.walletStat[el].toFixed(4)}</TableCell>
							))}
						</TableRow>
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
};

export default ChartTable;
