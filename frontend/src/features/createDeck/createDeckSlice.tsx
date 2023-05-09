import { createSlice } from "@reduxjs/toolkit";
import { ICreateDeckState } from "../../shared/types";

const initialState: ICreateDeckState = {
  isSelected: false,
  deck: {
    deckCode: "",
    format: "",
    hero: null,
    heroPower: null,
    class: null,
    cards: [],
    cardCount: 0,
  },
  addedCard: {
    id: 0,
    collectible: 0,
    slug: "",
    classId: 0,
    multiClassIds: [],
    spellSchoolId: 0,
    cardTypeId: 0,
    cardSetId: 0,
    rarityId: 0,
    artistName: "",
    minionTypeId: 0,
    manaCost: 0,
    name: "",
    text: "",
    image: "",
    imageGold: "",
    flavorText: "",
    cropImage: "",
    keywordIds: [],
    duels: {
      relevant: false,
      constructed: false,
    },
  },
};

export const createDeckSlice = createSlice({
  name: "createDeck",
  initialState,
  reducers: {
    reset: (state) => initialState,
    setClass: (state, action) => {
      state.isSelected = true;
      state.deck.format = action.payload.gameMode;
      state.deck.hero = action.payload.hero;
    },
    addCardToDeck: (state, action) => {
      const stateCopy = state.deck.cards;
      state.deck.cards = [...stateCopy, action.payload];
      state.addedCard = action.payload;
      state.deck.cardCount = state.deck.cardCount + 1;
    },
  },
});

export const { reset, setClass, addCardToDeck } = createDeckSlice.actions;
export default createDeckSlice.reducer;
