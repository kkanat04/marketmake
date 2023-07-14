import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import React, { useState } from 'react';

const HeaderScriptDropDown = () => {
	const [age, setAge] = useState('');

	const handleChange = (event: SelectChangeEvent) => {
		setAge(event.target.value);
	};

	return (
		<>
			<FormControl variant="standard" sx={{ minWidth: 120, mr: 5 }}>
				<InputLabel id="demo-simple-select-standard-label">All scripts</InputLabel>
				<Select
					labelId="demo-simple-select-standard-label"
					id="demo-simple-select-standard"
					value={age}
					onChange={handleChange}
					label="All scripts"
				>
					<MenuItem value={10}>Ten</MenuItem>
					<MenuItem value={20}>Twenty</MenuItem>
					<MenuItem value={30}>Thirty</MenuItem>
				</Select>
			</FormControl>
			<FormControl disabled variant="standard" sx={{ minWidth: 120 }}>
				<InputLabel id="demo-simple-select-standard-label">All scripts</InputLabel>
				<Select
					labelId="demo-simple-select-standard-label"
					id="demo-simple-select-standard"
					value={age}
					onChange={handleChange}
					label="All scripts"
				>
					<MenuItem value={10}>Ten</MenuItem>
					<MenuItem value={20}>Twenty</MenuItem>
					<MenuItem value={30}>Thirty</MenuItem>
				</Select>
			</FormControl>
		</>
	);
};

export default HeaderScriptDropDown;
