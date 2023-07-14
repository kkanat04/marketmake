import './WalletsNft.css';

import {CircularProgress} from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React from 'react';
import {useNavigate} from 'react-router-dom';

import {useGetWalletsNftQuery} from '../../services/query';

const WalletsNft = () => {
	const navigate = useNavigate();
	const {data, isLoading} = useGetWalletsNftQuery();

	const goToGraphic = (slug: string) => {
		navigate(`/profile?address=${slug}`);
	};
	console.log(data);
	return (
		<div className="walletsNft">
			{
				!isLoading ?
					<>
						<h4>Count total: {data?.countTotal}</h4>
						<h4>Volume: {data?.volume}</h4>
						{
							data?.assets.map((el, index) => (
								<div className="walletsNft__column" key={index}>
									<p>{el?.wallet}</p>
									{
										el.collections.map((row, i) => (
											<div key={i} className="walletsNft__column__el">
												<TableContainer component={Paper}>
													<Table sx={{ minWidth: 650 }} aria-label="simple table">
														<TableHead>
															<TableRow>
																{Object.keys(row.info)
																	.filter(filter => filter !== 'fees' && filter !== 'safelistStatuses' && filter !== 'stats')
																	.map((rows, rowsI) => (
																		<TableCell
																			key={rowsI}
																			sx={{minWidth: 200}}>{rows}</TableCell>
																	))}
															</TableRow>
														</TableHead>
														<TableBody>
															<TableRow
																sx={{ '&:last-child td, &:last-child th': { border: 0 }}}
															>
																{Object.keys(row.info)
																	.filter(filter => filter !== 'fees' && filter !== 'safelistStatuses' && filter !== 'stats')
																	.map((rows, rowsI) => (
																		<TableCell
																			key={rowsI}
																			// @ts-ignore
																			onClick={() => rows === 'slug' && goToGraphic(row.info[rows])}>{row.info[rows]}</TableCell>
																	))}
															</TableRow>
														</TableBody>
													</Table>
												</TableContainer>

												<TableContainer component={Paper}>
													<Table sx={{ minWidth: 650 }} aria-label="simple table">
														<TableHead>
															<TableRow>
																<TableCell>tokenId</TableCell>
																<TableCell>price</TableCell>
																<TableCell>state</TableCell>
															</TableRow>
														</TableHead>
														<TableBody>
															{row.assets.map((rows, rowI) => (
																<TableRow
																	key={rowI}
																	sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
																>
																	<TableCell>{rows.tokenId}</TableCell>
																	<TableCell>{rows.price}</TableCell>
																	<TableCell>{rows.state}</TableCell>
																</TableRow>
															))}
														</TableBody>
													</Table>
												</TableContainer>
											</div>
										))
									}
								</div>
							))
						}
					</> : <CircularProgress />
			}
		</div>
	);
};

export default WalletsNft;
