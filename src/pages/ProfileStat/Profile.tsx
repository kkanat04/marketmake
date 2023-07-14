import './Profile.css';

import DarkModeIcon from '@mui/icons-material/DarkMode';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { CircularProgress } from '@mui/material';
import ChartTable from 'components/ChartTable/СhartTable';
import InfoCollection from 'components/InfoCollection/InfoCollection';
import {DateSalesMemo} from 'components/recharts/DateSales';
import {DateSalesActiveMemo} from 'components/recharts/DateSalesActive';
import {DatesStateMemo} from 'components/recharts/DatesState';
import {PlatformVolumeMemo} from 'components/recharts/PlatformVolume';
import {StateDatesMemo} from 'components/recharts/StateDates';
import {TopStatsMemo} from 'components/recharts/TopStats';
import {TrendingStatsMemo} from 'components/recharts/TrendingStats';
import {WalletCountsMemo} from 'components/recharts/WalletCounts';
import {WalletsAgeCountMemo} from 'components/recharts/WalletsAgeCount';
import {useAppDispatch, useAppSelector} from 'hooks/redux';
import React, {useCallback} from 'react';
import {useLocation, useSearchParams} from 'react-router-dom';

import GoBack from '../../components/GoBack/GoBack';
import InfoStats from '../../components/InfoStats/InfoStats';
import WalletCountsTable from '../../components/WalletCountsTable/WalletCountsTable';
import {SET_THEME} from '../../redux/slicers/ProfileSlicer';
import {useGetStatQuery} from '../../services/query';

export default function Profile() {
	const dispatch = useAppDispatch();
	const [searchParams] = useSearchParams();
	const {state} = useLocation();
	const {isLoading, data: stateData} = useGetStatQuery({
		input: searchParams.get('address') ? searchParams.get('address') as string : '', checkBox: state?.checkBox ? state.checkBox : false,
	});

	const {platformVolume, walletsAge2count, dateSales, datesState, stateDates, dateSalesActive, theme} =
    useAppSelector(stateRedux => stateRedux.profile);

	const changeTheme = useCallback(() => {
		dispatch(SET_THEME(theme === 'dark' ? 'light' : 'dark'));
	}, [theme]);

	return (
		<div className="profile" style={{backgroundColor: theme === 'dark' ? '#1E1E1E' : '#fff'}}>
			{
				!isLoading ? stateData ?
					<>
						<div className="profile_head">
							<GoBack />
							<div onClick={changeTheme}>
								{
									theme === 'dark' ? <WbSunnyIcon style={{color: 'yellow', width: 40, height: 40, cursor: 'pointer'}} />
										: <DarkModeIcon style={{cursor: 'pointer', color: 'blue', width: 40, height: 40}} />
								}
							</div>
							 </div>
							  <InfoCollection state={stateData} />
							  <InfoStats state={stateData} />
							  <ChartTable state={stateData} />
							  <div className="profile_graphic">
							 <PlatformVolumeMemo state={stateData} data={platformVolume} />
							 <WalletsAgeCountMemo state={stateData} data={walletsAge2count} />
							 <DateSalesMemo state={stateData} data={dateSales}/>
							 <DateSalesActiveMemo state={stateData} data={dateSalesActive} />
							 <DatesStateMemo state={stateData} data={datesState} />
							 <StateDatesMemo state={stateData} data={stateDates} />
							 <TrendingStatsMemo state={stateData} />
							 <TopStatsMemo state={stateData}/>
							 <WalletCountsMemo state={stateData} />
							 <WalletCountsTable data={stateData?.walletCounts}/>
						  </div>
					</> : <p>Invalid address</p> : <CircularProgress />
			}
		</div>
	);
}
