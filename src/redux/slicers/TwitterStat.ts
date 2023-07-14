import { createSlice } from '@reduxjs/toolkit';

type initialStateType = {
	rangeToStat: any
	firstTable: any
}


const initialState: initialStateType = {
	firstTable: [],
	rangeToStat: [],
};

const TwitterStat = createSlice({
	name: 'TwitterStat',
	initialState,
	reducers: {
		SET_FIRST_TABLE(state, action) {
			const data = action.payload;
			console.log(data);
			const val = Object.keys(data).filter(el => el === 'words' || el === 'tags' || el === 'wordsPairs');
			val.forEach(el => {
				const val2 = Object.keys(data[el]);
				state.firstTable.push({
					title: el,
					data: data[el],
				});
				val2.forEach(head => {

				});
			});
		},
	},
});

export const { SET_FIRST_TABLE } = TwitterStat.actions;
export default TwitterStat.reducer;
