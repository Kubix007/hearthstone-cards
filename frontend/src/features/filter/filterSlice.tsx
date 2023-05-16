import { createSlice } from "@reduxjs/toolkit";
import { IFilterState } from "../../shared/types";

const initialState: IFilterState = {
  pagination: {
    page: {
      name: `Strona: 1`,
      value: `1`,
    },
    perPage: 40,
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
    manaCost: {
      name: "Mana: Dowolny",
      value: "Mana: Dowolny",
      manaValue: [],
    },
    attack: {
      name: "Dowolny atak",
      value: "",
    },
    health: {
      name: "Dowolne zdrowie",
      value: "",
    },
    rarity: {
      name: "Dowolna rzadkość",
      value: "",
    },
    spellSchool: {
      name: "Dowolna szkoła zaklęć",
      value: "",
    },
    type: {
      name: "Dowolny rodzaj karty",
      value: "",
    },
    minionType: {
      name: "Dowolny typ stronnika",
      value: "",
    },
    keyword: {
      name: "Dowolne słowo kluczowe",
      value: "",
    },
    textFilter: "",
    gameMode: {
      name: "",
      value: "",
    },
    sort: {
      name: "Nazwa karty: od A do Z",
      value: "name:asc",
    },
    neutralCards: "",
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
      state.filters.manaCost.manaValue.push(action.payload);
    },
    reduceManaCost(state, action) {
      state.filters.manaCost.manaValue =
        state.filters.manaCost.manaValue.filter((x) => x !== action.payload);
    },
    setManaCost(state, action) {
      state.filters.manaCost.name = action.payload.name;
      state.filters.manaCost.value = action.payload.value;
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
    changeHealth(state, action) {
      state.filters.health = action.payload;
    },
    changeTypeCard(state, action) {
      state.filters.type = action.payload;
    },
    changeMinionType(state, action) {
      state.filters.minionType = action.payload;
    },
    changeSpellSchool(state, action) {
      state.filters.spellSchool = action.payload;
    },
    changeRarity(state, action) {
      state.filters.rarity = action.payload;
    },
    changeKeyword(state, action) {
      state.filters.keyword = action.payload;
    },
    changeSortType(state, action) {
      state.filters.sort = action.payload;
    },
    changeNeutralCards(state, action) {
      if (action.payload === true) {
        state.filters.neutralCards = "neutral";
      } else {
        state.filters.neutralCards = "";
      }
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
  changeHealth,
  changeTypeCard,
  changeMinionType,
  changeSpellSchool,
  changeRarity,
  changeKeyword,
  changeSortType,
  setManaCost,
  changeNeutralCards,
} = filterSlice.actions;
export default filterSlice.reducer;
