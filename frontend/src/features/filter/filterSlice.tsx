import { createSlice } from "@reduxjs/toolkit";
import { IFilterState } from "../../shared/types";

const initialState: IFilterState = {
  pagination: {
    page: 1,
    perPage: 30,
  },
  filters: {
    set: "",
    class: "",
    manaCost: [],
    attack: "",
    health: "",
    rarity: "",
    type: "",
    minionType: "",
    keyword: "",
    textFilter: "",
    gameMode: "",
    sort: "",
  },
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    reset: () => initialState,
    changePage(state, action) {
      state.pagination.page = action.payload;
    },
    changePerPage(state, action) {
      state.pagination.perPage = action.payload;
    },
    addManaCost(state, action) {
      state.filters.manaCost.push(action.payload);
    },
    reduceManaCost(state, action) {
      state.filters.manaCost = state.filters.manaCost.filter(
        (x) => x !== action.payload
      );
    },
  },
});

export const { reset, changePage, changePerPage, addManaCost, reduceManaCost } =
  filterSlice.actions;
export default filterSlice.reducer;
