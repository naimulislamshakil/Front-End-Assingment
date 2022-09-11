import { configureStore } from '@reduxjs/toolkit';
import createUserSlice from './Slice/Register';
// ...

export const store = configureStore({
	reducer: {
		register: createUserSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
