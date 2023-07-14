import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type initialStateType = {
	walletsAge2count: any,
	platformVolume: any,
	dateSales: any,
	datesState: any,
	stateDates: any,
	dateSalesActive: any,
	logs: any,
	addressInput: string,
	theme: 'dark' | 'light'
}


const initialState: initialStateType = {
	walletsAge2count: [],
	platformVolume: [],
	dateSales: [],
	datesState: [],
	stateDates: [],
	dateSalesActive: [],
	logs: [],
	addressInput: '',
	theme: 'light',
};

const ProfileSlicer = createSlice({
	name: 'ProfileSlicer',
	initialState,
	reducers: {
		SET_PLATFORM_VOLUME(state, action: PayloadAction<any>) {
			if (!action?.payload?.data) return;
			const val = Object.keys(action?.payload?.data);
			val.forEach(key => {
				state.platformVolume.push({name: key, value: action?.payload?.data[key]});
			});
		},
		SET_WALLETS_AGE_COUNT(state, action: PayloadAction<any>) {
			if (!action?.payload?.data) return;
			const val = Object.keys(action?.payload?.data);
			val.forEach(key => {
				state.walletsAge2count.push({name: key, value: action?.payload?.data[key]});
			});
		},
		SET_DATA_SALES(state, action: PayloadAction<any>) {
			if (!action?.payload?.data) return;
			const val = Object.keys(action?.payload?.data);
			val.forEach(key => {
				state.dateSales.push({
					name: key, total: action?.payload?.data[key].total,
					...action?.payload?.data[key],
				});
			});
		},
		SET_DATES_STATE(state, action: PayloadAction<any>) {
			if (!action?.payload?.data) return;
			const val = Object.keys(action?.payload?.data);
			val.forEach(key => {
				state.datesState.push({name: key, value: action?.payload?.data[key]});
			});
		},
		SET_STATE_DATES(state, action: PayloadAction<any>) {
			if (!action?.payload?.data) return;
			state.stateDates = action?.payload?.data;
		},
		SET_DATA_SALES_ACTIVE(state, action: PayloadAction<any>) {
			if (!action?.payload?.data) return;
			const val = Object.keys(action?.payload?.data);
			val.forEach(key => {
				state.dateSalesActive.push({
					name: key,
					...action?.payload?.data[key],
				});
			});
		},
		SET_ADDRESS_INPUT(state, action: PayloadAction<any>) {
			state.addressInput = action.payload;
		},
		SET_THEME(state, action: PayloadAction<'dark'|'light'>) {
			state.theme = action.payload;
		},
	},
});

export const { SET_THEME, SET_ADDRESS_INPUT, SET_DATA_SALES_ACTIVE ,SET_PLATFORM_VOLUME,SET_WALLETS_AGE_COUNT, SET_DATA_SALES, SET_DATES_STATE, SET_STATE_DATES } = ProfileSlicer.actions;
export default ProfileSlicer.reducer;
