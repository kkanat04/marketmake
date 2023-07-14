import './HeaderScript.css';

import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import HeaderScriptDropDown from 'components/HeaderScriptDropDown/HeaderScriptDropDown';
import HeaderScriptPlay from 'components/HeaderScriptPlay/HeaderScriptPlay';
import React from 'react';
import { Link } from 'react-router-dom';

const HeaderScript = () => {
	return (
		<div className="headerScript">
			<div className="headerScript_container">
				<div className="headerScript_container_logo">
					<Link to={'/'}>Go back</Link>
				</div>
				<div className="headerScript_container_dropdown">
					<HeaderScriptDropDown />
					<HeaderScriptPlay />
				</div>
				<div className="headerScript_container_dotted">
					<MoreVertRoundedIcon />
				</div>
			</div>
		</div>
	);
};

export default HeaderScript;