import './SearchDiscordInvitesResults.css';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import React, {useEffect} from 'react';

import {useAppDispatch, useAppSelector} from '../../../hooks/redux';
import {IDiscordInvite} from '../../../interface/IDiscordInvite';
import {SET_DISCORD_INVITES} from '../../../redux/slicers/DiscordInvitesSlicer';

type Props = {
	data?: IDiscordInvite
};

const SearchDiscordInvitesResults = ({data}: Props) => {
	const {discordInvites} = useAppSelector(state => state.discordInvites);
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (data) {
			dispatch(SET_DISCORD_INVITES(data));
		}
	}, [data]);

	console.log(discordInvites);


	if (!data || data[0] === undefined) return <></>;

	return (
		<div className="searchDiscordInvitesResults">
			{
				Object.keys(discordInvites || {}).map(key => (
					<div key={key} className="searchDiscordInvitesResults__el">
						<h2>{key}</h2>
						<div className="searchDiscordInvitesResults__el__channel">
							<h2>Channel</h2>
							<TableContainer sx={{mt: 1}} component={Paper}>
								<Table sx={{minWidth: 650}} aria-label="simple table">
									<TableHead>
										<TableRow>
											{
												Object.keys(discordInvites[key]).map(row => {
													return	Object.keys(discordInvites[key][row][0].channel).map((el, i) => (
														<TableCell key={i}>{el}</TableCell>
													));
												})
											}
										</TableRow>
									</TableHead>
									<TableBody>
										<TableRow
											sx={{'&:last-child td, &:last-child th': {border: 0}}}
										>
											{
												Object.keys(discordInvites[key]).map(row => {
													return	Object.keys(discordInvites[key][row][0].channel).map((el, i) => (
													// @ts-ignore
														<TableCell key={i}>{discordInvites[key][row][0].channel[el]}</TableCell>
													));
												})
											}
										</TableRow>
									</TableBody>
								</Table>
							</TableContainer>
						</div>
						<div className="searchDiscordInvitesResults__el__inviter">
							<h3>Inviter</h3>
							 {
								Object.keys(discordInvites[key]).map((key2) => {
									return discordInvites[key][key2].map((el, i) => (
										<div key={i}>
											{
												i === 0 ?
													<>
														<p>{el?.inviter?.username}</p>
														<TableContainer key={i} sx={{mt: 1, mb: 2}} component={Paper}>
															<Table sx={{minWidth: 650}} aria-label="simple table">
																<TableHead>
																	<TableRow>
																		{Object.keys(el.inviter || {}).map((row, index) => (
																			<TableCell key={index}>{row}</TableCell>
																		))}
																	</TableRow>
																</TableHead>
																<TableBody>
																	<TableRow
																		sx={{'&:last-child td, &:last-child th': {border: 0}}}
																	>
																		{Object.keys(el.inviter || {}).map((row, index) => (
																			// @ts-ignore
																			<TableCell key={index}>{el.inviter[row]}</TableCell>
																		))}
																	</TableRow>
																</TableBody>
															</Table>
														</TableContainer>
													</>
													: null
											}

											{
												Object.keys(el.utm || {}).length ? <h3>Utm:</h3> : null
											}

											{
												Object.keys(el.utm || {}).map((row, index) => (
													// @ts-ignore
													<p key={index}>{row}: <span>{el.utm[row]}</span></p>
												))
											}

											<div className="searchDiscordInvitesResults__el__otherField">
												<div className="searchDiscordInvitesResults__el__otherField__el">
													<Accordion>
														<AccordionSummary
															expandIcon={<ExpandMoreIcon />}
															aria-controls="panel1a-content"
															id="panel1a-header"
														>
															<Typography>Open details</Typography>
														</AccordionSummary>
														<AccordionDetails>
															 {
																Object.keys(el || {})
																	.filter(elFilter => elFilter !== 'channel' && elFilter !== 'inviter' && elFilter !== 'utm')
																	.map((row, index) => (
																		// @ts-ignore
																		<Typography key={index}>{row}: <span>{el[row]}</span></Typography>
																	))
															 }
														</AccordionDetails>
													</Accordion>
												</div>
											</div>
										</div>
									));
								})
							 }
						</div>
					</div>
				))
			}
		</div>
	);
};

export default SearchDiscordInvitesResults;
