import './Mentions.css';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React from 'react';

type Props = {
	data: any
}

const Mentions = ({data}: Props) => {

	if (!Object.keys(data).length) return <></>;

	return (
		<div className="mentions">
			<p>Mentions</p>
			<div>
				{Object.keys(data).map((el, i) => (
					<div key={i} style={{marginTop: 20}}>
						<h3>{el}</h3>
						<TableContainer component={Paper}>
							<Table sx={{width: 600}} aria-label="simple table">
								<TableHead>
									<TableRow>
										<TableCell>user</TableCell>
										<TableCell>count</TableCell>
										<TableCell>followers</TableCell>
										<TableCell>following</TableCell>
										<TableCell>collection</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
							 {data[el].map((row: any, index: number) => (
										<TableRow
											key={index}
											sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
										>
											<TableCell>{row.user}</TableCell>
											<TableCell>{row.count}</TableCell>
											<TableCell>{row.followers}</TableCell>
											<TableCell>{row.following}</TableCell>
											<TableCell>{row?.collection}</TableCell>
										</TableRow>
							 ))}
								</TableBody>
							</Table>
						</TableContainer>
					</div>
				))}
			</div>
		</div>
	);
};

export default Mentions;
