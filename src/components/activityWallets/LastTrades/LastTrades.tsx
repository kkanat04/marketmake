import './LastTrades.css';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import React from 'react';

import {LastTrade as ILastTrade} from '../../../interface/IActivityWallets';

type Props = {
	data?: ILastTrade[]
}

const LastTrades = ({data}: Props) => {
	if (!data?.length) return <></>;

	return (
		<div className="lastTrades">
			<p className="lastTrades_title">Last trades</p>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label="simple table">
					<TableBody>
						{
							data?.map((el, i) => (
								<TableRow
									key={i}
									sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
								>
									<TableCell align="center">
										<a target={'_blank'} href={`https://opensea.io/assets/ethereum/${el.contract_address}/${el.token_id}`} rel="noreferrer">
											{el.token_id}
										</a>
									</TableCell>
									<TableCell align="center">{new Date(el.timestamp).toLocaleString('en-GB', {
										hour12: false,
									})}</TableCell>
									<TableCell align="center">{el.contract_address}</TableCell>
									<TableCell align="center">{el.tradeType}</TableCell>
									<TableCell align="center">{el.price}</TableCell>
									<TableCell align="center">{el.platform}</TableCell>
								</TableRow>
							))
						}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
};

export default LastTrades;
