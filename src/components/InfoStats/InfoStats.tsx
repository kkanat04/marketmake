import React from 'react';

import TableHoc from '../TableHoc/TableHoc';

const InfoStats = ({state}: any) => {

	if (!state?.info?.stats) return <></>;

	return (
		<div>
			<TableHoc data={state?.info?.stats}/>
		</div>
	);
};

export default InfoStats;
