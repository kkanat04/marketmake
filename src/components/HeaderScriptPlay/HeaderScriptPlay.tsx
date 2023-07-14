import './HeaderScriptPlay.css';

import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import React from 'react';

const HeaderScriptPlay = () => {
	return (
		<div className="headerScriptPlay">
			<PlayArrowIcon style={{color: 'blue'}} />
			<p style={{color: 'blue'}}>AUTO RELOAD</p>
		</div>
	);
};

export default HeaderScriptPlay;