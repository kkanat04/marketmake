import './NavigationMenuSingle.css';

import React from 'react';
import { Link } from 'react-scroll';

type Props = {
	data: any
}

const NavigationMenuSingle = ({data}: Props) => {
	return (
		<div className="navigationMenu">
			<h3>Navigation menu range stat single</h3>
			<div className="navigationMenu__column">
				{data?.map((el: any, i: number) => (
					<button className="navigationMenu__btn">
						<Link
							to={`rangeStatSingle__volumeGroup__${el.volumeGroup}`}
							smooth={true}
							key={i}
						>
							{el.volumeGroup}
						</Link>
					</button>
				))}
			</div>
		</div>
	);
};

export default NavigationMenuSingle;
