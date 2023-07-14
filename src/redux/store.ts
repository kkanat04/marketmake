import {combineReducers, configureStore} from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { marketmakeApi } from '../services/query';
import DataTableSlicer from './slicers/DataTableSlicer';
import DiscordInvitesSlicer from './slicers/DiscordInvitesSlicer';
import ProfileSlicer from './slicers/ProfileSlicer';
import TwitterStat from './slicers/TwitterStat';
import Web3Slicer from './slicers/Web3Slicer';

const persistConfig = {
	key: 'root',
	storage,
	blacklist: [marketmakeApi.reducerPath, 'dataTable', 'profile', 'twitterStat', 'discordInvites'],
};
const rootReducer = combineReducers({
	web3: Web3Slicer,
	dataTable: DataTableSlicer,
	profile: ProfileSlicer,
	[marketmakeApi.reducerPath]: marketmakeApi.reducer,
	twitterStat: TwitterStat,
	discordInvites: DiscordInvitesSlicer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}).concat(marketmakeApi.middleware),
});

export default store;
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
