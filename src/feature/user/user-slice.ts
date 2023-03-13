import { RequestState } from "src/models/RequestState";
import { requestState } from "src/models/RequestState";
import { User } from "src/models/User";
import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "src/API/AuthService";
import { RequestError } from "src/models/RequestError";

const signIn = createAsyncThunk<User, {email: string, password: string}>(
    "user/signIn",
    async ({email, password}, thunkAPI) =>
        await AuthService.signIn(email, password)
            .catch((e) => thunkAPI.rejectWithValue(e))
);

const signUp = createAsyncThunk<User,{email: string, name: string, password: string}>(
    "user/signUp",
    async ({email, name, password}, thunkAPI) =>
        await AuthService.signUp(email, name, password)
            .catch((e) => thunkAPI.rejectWithValue(e))
);

const getCurrentUser = createAsyncThunk<User, void>(
    "user/current",
    async (_, thunkApi) => await AuthService.currentUser().catch(e => thunkApi.rejectWithValue(e))
);

interface UserState {
    request: RequestState<User>;
}

const initialState: UserState = {
    request: requestState.initial(),
}

const userSlice = createSlice<UserState, {}, "user">({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(
            signIn.pending,
            (state) => {
                state.request = requestState.pending();
            }
        ).addCase(
            signIn.fulfilled,
            (state, action) => {
                state.request = requestState.success(action.payload);
            }
        ).addCase(
            signIn.rejected,
            (state, action) => {
                state.request = requestState.fail(action.payload as RequestError);
            }
        ).addCase(
            signUp.pending,
            (state) => {
                state.request = requestState.pending();
            }
        ).addCase(
            signUp.fulfilled,
            (state, action) => {
                state.request = requestState.success(action.payload);
            }
        ).addCase(
            signUp.rejected,
            (state, action) => {
                state.request = requestState.fail(action.payload as RequestError);
            }
        ).addCase(
            getCurrentUser.pending,
            (state) => {
                state.request = requestState.pending();
            }
        ).addCase(
            getCurrentUser.fulfilled,
            (state, action) => {
                state.request = requestState.success(action.payload);
            }
        ).addCase(
            getCurrentUser.rejected,
            (state) => {
                state.request = requestState.initial();
            }
        )
    }
});

export const userActions = {
    ...userSlice.actions,
    signIn,
    signUp,
    getCurrentUser,
};
export const userReducer = userSlice.reducer;
