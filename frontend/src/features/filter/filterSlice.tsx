import { createSlice } from "@reduxjs/toolkit";
import { IFilterState } from "../../shared/types";

const initialState: IFilterState = {
  pagination: {
    page: 1,
    perPage: 30,
  },
  filters: {
    set: {
      name: "Karty standardowe",
      value: "standard",
    },
    class: {
      name: "Wszystkie klasy",
      value: "",
    },
    manaCost: [],
    attack: {
      name: "Dowolny atak",
      value: "",
    },
    health: "",
    rarity: "",
    type: "",
    minionType: "",
    keyword: "",
    textFilter: "",
    gameMode: {
      name: "",
      value: "",
    },
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
    clearManaCost(state, action) {
      state.filters.manaCost = action.payload;
    },
    changeClass(state, action) {
      state.filters.class = action.payload;
    },
    changeSet(state, action) {
      state.filters.set = action.payload;
    },
    changeGameMode(state, action) {
      state.filters.gameMode = action.payload;
    },
    changeTextFilter(state, action) {
      state.filters.textFilter = action.payload;
    },
    changeAttack(state, action) {
      state.filters.attack = action.payload;
    },
  },
});

export const {
  reset,
  changePage,
  changePerPage,
  addManaCost,
  reduceManaCost,
  changeClass,
  changeSet,
  changeGameMode,
  clearManaCost,
  changeTextFilter,
  changeAttack,
} = filterSlice.actions;
export default filterSlice.reducer;
