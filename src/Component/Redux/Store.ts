import { configureStore } from '@reduxjs/toolkit';
import createLoginSlice from './Slice/LoginSlice';
import createUserSlice from './Slice/Register';
// ...

export const store = configureStore({
	reducer: {
		register: createUserSlice,
		login: createLoginSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
