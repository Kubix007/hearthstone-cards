import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ICardsState } from "../../shared/types";
import cardService from "./cardsService";

const initialState: ICardsState = {
  cards: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

//Get all cards
export const getAllCards = createAsyncThunk(
  "cards/getAll",
  async (_, thunkAPI) => {
    try {
      return await cardService.getAllCards();
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

export const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllCards.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllCards.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.cards = action.payload;
      })
      .addCase(getAllCards.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
      });
  },
});

export const { reset } = cardsSlice.actions;
export default cardsSlice.reducer;
