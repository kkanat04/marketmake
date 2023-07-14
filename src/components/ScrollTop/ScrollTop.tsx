import './ScrollTop.css';

import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import React from 'react';
import { animateScroll as scroll } from 'react-scroll';

const ScrollTop = () => {

	const scrollTop = () => {
		scroll.scrollToTop();
	};

	return (
		<button onClick={scrollTop} className="scrollTop">
			<ArrowUpwardIcon />
		</button>
	);
};

export default ScrollTop;
