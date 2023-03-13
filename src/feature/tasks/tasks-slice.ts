import { RequestState } from "src/models/RequestState";
import { Task } from "src/models/Task";
import { requestState } from "src/models/RequestState";
import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import TaskService from "src/API/TaskService";
import { RequestError } from "src/models/RequestError";

const getAll = createAsyncThunk<Task[], void>(
    "tasks/getAll",
    async (_, thunkAPI) => await TaskService.getAll().catch(e => thunkAPI.rejectWithValue(e)),
);

interface TasksState {
    request: RequestState<Task[]>;

    taskList: Task[];
}

const initialState: TasksState = {
    request: requestState.initial(),
    taskList: [],
}

const tasksSlice = createSlice<TasksState, {}, "tasks">({
    name: "tasks",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(
            getAll.pending,
            (state) => {
                state.request = requestState.pending();
            }
        ).addCase(
            getAll.fulfilled,
            (state, action) => {
                state.request = requestState.success(action.payload);
            }
        ).addCase(
            getAll.rejected,
            (state, action) => {
                state.request = requestState.fail(action.payload as RequestError);
            }
        )
    }
});

export const tasksActions = {
    ...tasksSlice.actions,
    getAll,
}
export const tasksReducer = tasksSlice.reducer;