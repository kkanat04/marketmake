import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import React, { useState } from 'react';

const FilterScriptDropDown = () => {
	const [age, setAge] = useState('');

	const handleChange = (event: SelectChangeEvent) => {
		setAge(event.target.value as string);
	};
	return (
		<FormControl sx={{width: '70%'}}>
			<InputLabel id="demo-simple-select-label">Filter errors</InputLabel>
			<Select
				labelId="demo-simple-select-label"
				id="demo-simple-select"
				value={age}
				label="Filter errors"
				onChange={handleChange}
			>
				<MenuItem value={10}>Ten</MenuItem>
				<MenuItem value={20}>Twenty</MenuItem>
				<MenuItem value={30}>Thirty</MenuItem>
			</Select>
		</FormControl>
	);
};

export default FilterScriptDropDown;