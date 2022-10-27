import { createSlice } from "@reduxjs/toolkit";
import { IFilterState } from "../../shared/types";

const initialState: IFilterState = {
  pagination: {
    page: 1,
    perPage: 30,
  },
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    reset: (state) => initialState,
    changePage(state, action) {
      state.pagination.page = action.payload;
    },
    changePerPage(state, action) {
      state.pagination.perPage = action.payload;
    },
  },
});

export const { reset, changePage, changePerPage } = filterSlice.actions;
export default filterSlice.reducer;
