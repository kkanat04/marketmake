import { IReport } from 'interface/IReport';
import React, { useEffect, useState } from 'react';

type Props = {
	rows: IReport[]
}

const SelectTablePrice = ({rows}: Props) => {
	const [totalPrice, setTotalPrice] = useState<number>(0);

	useEffect(() => {
		const price = rows.reduce((prev, item) => {
			if (item.price) {
				return prev + +item.price;
			}
			else {
				return prev;
			}
		}, 0);
		setTotalPrice(price);
	}, [rows]);

	return (
		<div>
			total price: {totalPrice.toFixed(2)}
		</div>
	);
};

export default SelectTablePrice;