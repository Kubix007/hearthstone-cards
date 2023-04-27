import { createSlice } from "@reduxjs/toolkit";
import { ICreateDeckState } from "../../shared/types";

const initialState: ICreateDeckState = {
  isSelected: false,
  selectedClass: {
    name: "",
    gameMode: "",
  },
  cards: [],
};

export const createDeckSlice = createSlice({
  name: "createDeck",
  initialState,
  reducers: {
    reset: (state) => initialState,
    setClass: (state, action) => {
      state.isSelected = true;
      state.selectedClass = action.payload;
    },
  },
});

export const { reset, setClass } = createDeckSlice.actions;
export default createDeckSlice.reducer;
