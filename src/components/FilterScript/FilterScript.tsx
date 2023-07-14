import './FilterScript.css';

import ChooseDayScript from 'components/ChooseDayScript/ChooseDayScript';
import FilterScriptDropDown from 'components/FilterScriptDropDown/FilterScriptDropDown';

const FilterScript = () => {
	return (
		<div className="filterScript">
			<div className="filterScript_container">
				<FilterScriptDropDown />
				<ChooseDayScript />
			</div>
		</div>
	);
};

export default FilterScript;