import './CustomTable.css';

import {FormControl, InputLabel, MenuItem, Select} from '@mui/material';
import {SelectChangeEvent} from '@mui/material/Select';
import React, {useEffect, useState} from 'react';

type Props = {
	data?: any
	title: string
}

const CustomTable = ({data, title}: Props) => {
	const [newData, setNewData] = useState<any>({});
	const [filterCount, setFilterCount] = useState<string>('10');

	const handleChange = (event: SelectChangeEvent) => {
		setFilterCount(event.target.value as string);
	};

	useEffect(() => {

		const asArray = Object.entries(data);

		const filtered = asArray.reduce((acc, rec) => {
			return {
				...acc,
				[rec[0]]: Object.fromEntries(
					// @ts-ignore
					Object.entries(rec[1]).filter(el => el[1] > +filterCount),
				),
			};
		}, {});

		for (let key in filtered) {
			// @ts-ignore
			if (Object.values(filtered[key]).length === 0) {
				Reflect.deleteProperty(filtered, key);
			}
		}

		setNewData(filtered);

	}, [filterCount]);

	if (!Object.keys(data).length) return <></>;

	return (
		<div className="customTable">
			<div className="customTable__filter">
				<p>{title}</p>
				<FormControl sx={{width: 70}}>
					<InputLabel id="demo-simple-select-label">Filter</InputLabel>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						value={filterCount}
						label="Filter"
						onChange={handleChange}
					>
						<MenuItem value={0}>All</MenuItem>
						<MenuItem value={5}>5</MenuItem>
						<MenuItem value={10}>10</MenuItem>
						<MenuItem value={20}>20</MenuItem>
						<MenuItem value={30}>30</MenuItem>
					</Select>
				</FormControl>
			</div>
			<div className="customTable__container">
			 {
					Object.keys(newData).map((key, index) => (
						<div key={index}>
							<p className="customTable__head">{key}</p>
							<div className="customTable__body">
								{
									Object.keys(newData[key]).map((row, i) => (
										<div key={i} className="customTable__el">
											<span>{row}</span>
											<p>{newData[key][row]}</p>
										</div>
									))
								}
							</div>
						</div>
					))
			 }
			</div>
		</div>
	);
};

export default CustomTable;
