import { createSlice } from "@reduxjs/toolkit";
import { ReactNode } from "react";

interface ModalDialogueState {
    opened: boolean,
    children: ReactNode,
}

const initialState: ModalDialogueState = {
    opened: false,
    children: null,
}

const modalDialogueSlice = createSlice<ModalDialogueState, {}, "modalDialogue">({
    name: "modalDialogue",
    initialState,
    reducers: {},
});

export const modalDialogueActions = modalDialogueSlice.actions;
export const modalDialogueReducer = modalDialogueSlice.reducer;