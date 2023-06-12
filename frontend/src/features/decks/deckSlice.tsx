import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IDeckState, IGetDeckByCodeResponse } from "../../shared/types";
import deckService from "./deckService";
import { RootState } from "../../app/store";

const initialState: IDeckState = {
  decks: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Create new deck
export const createDeck = createAsyncThunk<
  IGetDeckByCodeResponse,
  IGetDeckByCodeResponse,
  { state: RootState }
>("decks/create", async (deckData: IGetDeckByCodeResponse, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token;
    return await deckService.createDeck(deckData, token);
  } catch (error: any) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

// Get user decks
export const getDecks = createAsyncThunk(
  "decks/getAll",
  async (_, thunkAPI: any) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await deckService.getDecks(token);
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

// Delete user deck
export const deleteDeck = createAsyncThunk<
  { id: string },
  string,
  { state: RootState }
>("decks/delete", async (id: string, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token;
    return await deckService.deleteDeck(id, token);
  } catch (error: any) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const deckSlice = createSlice({
  name: "deck",
  initialState,
  reducers: {
    //when we want to restore the default state
    reset: () => initialState,
  },
  //Deck state - pendning, fullfiled, rejected
  extraReducers(builder) {
    builder
      .addCase(createDeck.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createDeck.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.decks.push(action.payload);
      })
      .addCase(createDeck.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload as string;
      })
      .addCase(getDecks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.decks = action.payload;
      })
      .addCase(getDecks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getDecks.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload as string;
      })
      .addCase(deleteDeck.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.decks = state.decks.filter(
          (deck) => deck._id !== action.payload.id
        );
      })
      .addCase(deleteDeck.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteDeck.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload as string;
      });
  },
});

export const { reset } = deckSlice.actions;
export default deckSlice.reducer;
