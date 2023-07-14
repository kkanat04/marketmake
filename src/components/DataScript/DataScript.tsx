import './DataScript.css';

import { CircularProgress } from '@mui/material';
import DataScriptTable from 'components/DataScriptTable/DataScriptTable';
import DataScriptTable2 from 'components/DataScriptTable2/DataScriptTable2';
import ScriptTradesRun from 'components/ScriptTradesRun';
import { useAppSelector } from 'hooks/redux';
import React, { useEffect } from 'react';
import { useGetLogsQuery, useLazyGetLogsQuery } from 'services/query';

const DataScript = () => {
	const input = useAppSelector(state => state.profile.addressInput);
	const [trigger] = useLazyGetLogsQuery();
	const {data, isLoading} = useGetLogsQuery({addressInput: input});

	useEffect(() => {
		const interval = setInterval(() => {
			trigger({addressInput: input});
			  }, 15000);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="dataScript">
			<div className="dataScript_container">
				<div className="dataScript_container_data">
					{
						isLoading ? <CircularProgress /> :
							data?.logs?.length ?
								<>
									<ScriptTradesRun />
									<DataScriptTable2 />
									<DataScriptTable />
								</>
								: <p>Address is not valid</p>
					}
				</div>
			</div>
		</div>
	);
};

export default DataScript;
