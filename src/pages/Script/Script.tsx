import DataScript from 'components/DataScript/DataScript';
import FilterScript from 'components/FilterScript/FilterScript';
import HeaderScript from 'components/HeaderScript/HeaderScript';
import React from 'react';

const Script = () => {
	return (
		<div>
			<HeaderScript />
			<FilterScript />
			<DataScript />
		</div>
	);
};

export default Script;