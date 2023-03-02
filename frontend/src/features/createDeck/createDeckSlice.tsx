import { createSlice } from "@reduxjs/toolkit";
import { ICreateDeckState } from "../../shared/types";

const initialState: ICreateDeckState = {
  isSelected: false,
  selectedClass: {
    name: "",
  },
};

export const createDeckSlice = createSlice({
  name: "createDeck",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
});

export const { reset } = createDeckSlice.actions;
export default createDeckSlice.reducer;
