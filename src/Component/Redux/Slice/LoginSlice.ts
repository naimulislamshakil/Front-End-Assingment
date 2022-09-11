import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { LoginPerUser, Register } from '../Types';

interface User {
	user: LoginPerUser;
}

const initialState = {
	message: {},
	error: null,
	isLoading: false,
} as Register;

export const loginUser = createAsyncThunk(
	'assinment/register',
	async ({ user }: User) => {
		const res = await axios.post<string>(
			'http://localhost:5000/user/login',
			user
		);
		return res.data;
	}
);

export const createLoginSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder.addCase(loginUser.pending, (state, action) => {
			state.isLoading = true;
		});
		builder.addCase(
			loginUser.fulfilled,
			(state, action: PayloadAction<any>) => {
				state.isLoading = false;
				state.message = action.payload;
			}
		);
		builder.addCase(loginUser.rejected, (state, action: PayloadAction<any>) => {
			state.isLoading = false;
			state.error = action.payload;
		});
	},
});

export default createLoginSlice.reducer;
