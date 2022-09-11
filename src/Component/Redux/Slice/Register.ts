import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { PerUser, Register } from '../Types';

type User = {
	user: PerUser;
};

const initialState = {
	message: {},
	error: null,
	isLoading: false,
} as Register;

export const registerUser = createAsyncThunk(
	'assinment/register',
	async ({ user }: User) => {
		const res = await axios.post<string>(
			'http://localhost:5000/user/register',
			user
		);
		return res.data;
	}
);

export const createUserSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder.addCase(registerUser.pending, (state, action) => {
			state.isLoading = true;
		});
		builder.addCase(
			registerUser.fulfilled,
			(state, action: PayloadAction<any>) => {
				state.isLoading = false;
				state.message = action.payload;
			}
		);
		builder.addCase(
			registerUser.rejected,
			(state, action: PayloadAction<any>) => {
				state.isLoading = false;
				state.error = action.payload;
			}
		);
	},
});

export default createUserSlice.reducer;
