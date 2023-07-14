import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {
	Button,
	Checkbox,
	CircularProgress,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	TextField,
} from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { useAppDispatch } from 'hooks/redux';
import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { SET_ADDRESS_INPUT } from 'redux/slicers/ProfileSlicer';

import {
	useLazyExportActionCSVQuery, useLazyInvitesReportQuery,
	useLazyTwitterReportQuery,
	useLazyUsersReportQuery,
} from '../../services/query';
import {exportFile} from '../../utils/constants';

const theme = createTheme();

const Stat = () => {
	const dispatch = useAppDispatch();
	const [checkBox, setCheckbox] = useState(false);
	const [report, setReport] = useState('Collection info');
	const [input, setInput] = useState<string>('');
	const navigate = useNavigate();
	const [trigger, {data, isSuccess, isLoading}] = useLazyExportActionCSVQuery();
	const [trigger2, {data: data2, isSuccess: isSuccess2, isLoading: isLoading2}] = useLazyTwitterReportQuery();
	const [trigger3, {data: data3, isSuccess: isSuccess3, isLoading: isLoading3}] = useLazyUsersReportQuery();
	const [trigger4, {data: data4, isSuccess: isSuccess4, isLoading: isLoading4}] = useLazyInvitesReportQuery();

	const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (input) {
			if (report === 'Actions') {
				navigate(`/table?address=${input}`);
			}
			else if (report === 'Script') {
				dispatch(SET_ADDRESS_INPUT(input));
				navigate('/script');
			}
			else if (report === 'Actions CSV export') {
				trigger({addressInput: input});
			}
			else if (report === 'Twitter followers report') {
				trigger2(input);
			}
			else if (report === 'Discord users report') {
				trigger3(input);
			}
			else if (report === 'Discord invites report') {
				trigger4(input);
			}
			else {
				navigate(`/profile?address=${input}`, {state: {checkBox}});
			}
		}
		else {
			alert('enter input');
		}
	};

	useEffect(() => {
		if (report === 'Actions CSV export' && data && isSuccess) {
			exportFile(data);
		}
		else if (report === 'Twitter followers report' && data2 && isSuccess2) {
			exportFile(data2);
		}
		else if (report === 'Discord users report' && data3 && isSuccess3) {
			exportFile(data3);
		}
		else if (report === 'Discord invites report' && data4 && isSuccess4) {
			exportFile(data4);
		}
	}, [data, isSuccess, data2, isSuccess2, data3, isSuccess3, data4, isSuccess4]);

	return (
		<>
			<ThemeProvider theme={theme}>
				<Container component="main" maxWidth="xs">
					<CssBaseline />
					<Box
						sx={{
							mt: 10,
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
						}}
					>
						<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
							<LockOutlinedIcon />
						</Avatar>
						<Typography component="h1" variant="h5">
							NFT Collection report
						</Typography>
						<Box noValidate component="form" onSubmit={submitForm} sx={{ mt: 1 }}>
							<TextField
								required
								fullWidth
								autoFocus
								onChange={(e) => setInput(e.target.value)}
								margin="normal"
								label="Address"
							/>
							<FormControlLabel
								control={<Checkbox onChange={() => setCheckbox(!checkBox)} value="remember" color="primary" />}
								label="Fetch profiles"
							/>
							<FormControl fullWidth>
								<InputLabel id="demo-simple-select-label">Report</InputLabel>
								<Select
									labelId="demo-simple-select-label"
									id="demo-simple-select"
									value={report}
									label="Report"
									onChange={(e) => setReport(e.target.value)}
								>
									<MenuItem value={'Actions'}>Actions</MenuItem>
									<MenuItem value={'Actions CSV export'}>Actions CSV export</MenuItem>
									<MenuItem value={'Twitter followers report'}>Twitter followers report</MenuItem>
									<MenuItem value={'Discord users report'}>Discord users report</MenuItem>
									<MenuItem value={'Discord invites report'}>Discord invites report</MenuItem>
									<MenuItem value={'Collection info'}>Collection info</MenuItem>
									<MenuItem value={'Script'}>Script</MenuItem>
								</Select>
							</FormControl>
							<Button
								fullWidth
								type="submit"
								variant="contained"
								sx={{ mt: 3, mb: 3 }}
							>
								{isLoading || isLoading2 || isLoading3 || isLoading4 ? <CircularProgress sx={{color: '#fff'}}/>
									: report === 'Actions CSV export' || report === 'Twitter followers report' ||
                    report === 'Discord users report' || report === 'Discord invites report'
										? 'Download' : 'Send'}
							</Button>
							<Button
								fullWidth
								onClick={() => navigate('/activityWallets')}
								type="submit"
								variant="contained"
							>
              Go to activity wallets
							</Button>
							<Button
								fullWidth
								sx={{mt: 1}}
								onClick={() => navigate('/twitterStat')}
								type="submit"
								variant="contained"
							>
              Go to twitter analytics
							</Button>

							<Button
								fullWidth
								sx={{mt: 1}}
								onClick={() => navigate('/searchDiscordInvites')}
								type="submit"
								variant="contained"
							>
                Discord invites
							</Button>

							<Button
								fullWidth
								sx={{mt: 1}}
								onClick={() => navigate('/twitterSocialInfo')}
								type="submit"
								variant="contained"
							>
                Twitter app token
							</Button>

							<Button
								fullWidth
								sx={{mt: 1}}
								onClick={() => navigate('/unfollow')}
								type="submit"
								variant="contained"
							>
                Go to unfollow
							</Button>

							<Button
								fullWidth
								sx={{mt: 1}}
								onClick={() => navigate('/yourToken')}
								type="submit"
								variant="contained"
							>
                Your token
							</Button>

						</Box>
					</Box>
				</Container>
			</ThemeProvider>
		</>
	);
};

export default Stat;
