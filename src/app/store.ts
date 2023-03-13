import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "src/feature/user/user-slice";
import { tasksReducer } from "src/feature/tasks/tasks-slice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        tasks: tasksReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
