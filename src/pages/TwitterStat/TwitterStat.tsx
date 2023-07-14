import './TwitterStat.css';

import {CircularProgress} from '@mui/material';
import React from 'react';

import GoBack from '../../components/GoBack/GoBack';
import ScrollTop from '../../components/ScrollTop/ScrollTop';
import CustomTable from '../../components/twiiterStat/CustomTable/CustomTable';
import Mentions from '../../components/twiiterStat/Mentions/Mentions';
import NameCounters from '../../components/twiiterStat/NameCounters/NameCounters';
import NavigationMenu from '../../components/twiiterStat/NavigationMenu/NavigationMenu';
import NavigationMenuSingle from '../../components/twiiterStat/NavigationMenuSingle/NavigationMenuSingle';
import {useGetTwitterStatQuery} from '../../services/query';

const TwitterStat = () => {
	const {data, isLoading} = useGetTwitterStatQuery();
	return (
		<div className="twitterStat">
			<GoBack />
			{
				!isLoading ?
					<>
						<div className="twitterStat__navigation">
							<NavigationMenu data={data}/>
							<NavigationMenuSingle data={data}/>
						</div>
						<p>Regular range stat</p>
						{
							data?.map((el: any, i: number) => (
								<div key={i}>
									<p className={`rangeStat__volumeGroup__${el.volumeGroup} range__title`}>Volume group: {el.volumeGroup}</p>
									<CustomTable data={el.rangeToStat?.tags} title={'Tags'} />
									<Mentions data={el.rangeToStat?.mentions} />
									<NameCounters data={el.rangeToStat?.name2counters}/>
								</div>
							))
						}
						<p>Regular range stat (Single)</p>
						{
							data?.map((el: any, i: number) => (
								<div key={i}>
									<p className={`rangeStatSingle__volumeGroup__${el.volumeGroup} range__title`}>Volume group: {el.volumeGroup}</p>
									<CustomTable data={el.rangeToStatSingle?.tags} title={'Tags'} />
									<Mentions data={el.rangeToStatSingle?.mentions} />
									<NameCounters data={el.rangeToStatSingle?.name2counters}/>
								</div>
							))
						}
					</> : <CircularProgress />
			}
			<ScrollTop />
		</div>
	);
};

export default TwitterStat;
