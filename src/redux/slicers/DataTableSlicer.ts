import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IReport } from './../../interface/IReport';

type initialStateType = {
	selectedRows: IReport[]
}

const initialState: initialStateType = {
	selectedRows: [],
};

const DataTableSlicer = createSlice({
	name: 'DataTableSlicer',
	initialState,
	reducers: {
		SET_SELECTED_ROWS(state, action: PayloadAction<IReport>) {
			state.selectedRows.push(action.payload);
		},
		DELETE_SELECTED_ROWS(state, action: PayloadAction<IReport>) {
			state.selectedRows = state.selectedRows.filter(el => el.id !== action.payload.id);
		},
	},
});

export const { SET_SELECTED_ROWS, DELETE_SELECTED_ROWS } = DataTableSlicer.actions;
export default DataTableSlicer.reducer;