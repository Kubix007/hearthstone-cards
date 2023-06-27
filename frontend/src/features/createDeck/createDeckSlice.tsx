import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ICreateDeckState } from "../../shared/types";
import createDeckService from "./createDeckService";
import * as SharedTypes from "./../../shared/types";

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
  manaCosts: { manaCosts: [], highestManaCost: 1 },
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

//Get heroPowerCard
export const getHeroPowerCard = createAsyncThunk(
  "createdeck/getHeroPowerCard",
  async (heroPowerCardId: number, thunkAPI) => {
    try {
      return await createDeckService.getHeroPower(heroPowerCardId);
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

//Get DeckCode
export const getDeckCode = createAsyncThunk(
  "createdeck/getDeckCode",
  async (createDeckInfo: SharedTypes.ICreatedDeck, thunkAPI) => {
    try {
      return await createDeckService.getDeckCode(createDeckInfo);
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

//Get Deck by code
export const getDeckByCode = createAsyncThunk(
  "createdeck/getDeckByCode",
  async (deckCode: string, thunkAPI) => {
    try {
      return await createDeckService.getDeckByCode(deckCode);
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const createDeckSlice = createSlice({
  name: "createDeck",
  initialState,
  reducers: {
    reset: (state) => initialState,
    setClass: (state, action) => {
      state.isSelected = true;
      state.deck.format = action.payload.gameMode;
      state.deck.hero = action.payload.hero;
      state.deck.class = action.payload.class;
    },
    addCardToDeck: (state, action) => {
      const stateCopy = state.deck.cards;
      state.deck.cards = [...stateCopy, action.payload];
      state.addedCard = action.payload;
      state.deck.cardCount = state.deck.cardCount + 1;
    },
    removeCardFromDeck: (state, action) => {
      const indexToRemove = state.deck.cards.findIndex(
        (obj) => obj.id === action.payload.id
      );
      if (indexToRemove !== -1) {
        const stateCopy = [...state.deck.cards];
        stateCopy.splice(indexToRemove, 1);
        state.deck.cards = [...stateCopy];
        state.deck.cardCount = state.deck.cardCount - 1;
      }
    },
    updateManaCosts: (state, action) => {
      state.manaCosts = action.payload;
    },
    viewDeck: (state, action) => {
      state.isSelected = true;
      state.deck = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getHeroPowerCard.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getHeroPowerCard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.deck.heroPower = action.payload.cards[0];
      })
      .addCase(getHeroPowerCard.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
      })
      .addCase(getDeckCode.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getDeckCode.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.deck.deckCode = action.payload.deckCode;
        navigator.clipboard.writeText(action.payload.deckCode);
      })
      .addCase(getDeckCode.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
      })
      .addCase(getDeckByCode.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        getDeckByCode.fulfilled,
        (state, action: { payload: SharedTypes.IGetDeckByCodeResponse }) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.isSelected = true;
          state.deck.cards = [...action.payload.cards];
          state.deck.cardCount = action.payload.cardCount;
          state.deck.class = action.payload.class;
          state.deck.format = action.payload.format;
          state.deck.hero = action.payload.hero;
          state.deck.heroPower = action.payload.heroPower;
        }
      )
      .addCase(getDeckByCode.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSelected = false;
        state.message = action.payload as string;
      });
  },
});

export const {
  reset,
  setClass,
  addCardToDeck,
  removeCardFromDeck,
  updateManaCosts,
  viewDeck,
} = createDeckSlice.actions;
export default createDeckSlice.reducer;
