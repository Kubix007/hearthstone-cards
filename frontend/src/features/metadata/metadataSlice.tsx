import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IMetadataState } from "../../shared/types";
import metadataService from "./metadataService";

const initialState: IMetadataState = {
  metadata: {
    keywords: [
      { id: 0, slug: "", name: "", refText: "", text: "", gameModes: [] },
    ],
    sets: [
      {
        id: 0,
        name: "",
        slug: "",
        type: "",
        collectibleCount: 0,
        collectibleRevealedCount: 0,
        nonCollectibleCount: 0,
        nonCollectibleRevealedCount: 0,
      },
    ],
    types: [
      {
        slug: "",
        id: 0,
        name: "",
        gameModes: [],
      },
    ],
    rarities: [
      {
        slug: "",
        id: 0,
        craftingCost: [],
        dustValue: [],
        name: "",
      },
    ],
    classes: [
      {
        slug: "",
        id: 0,
        name: "",
        cardId: 0,
        heroPowerCardId: 0,
        alternateHeroCardIds: [],
      },
    ],
    minionTypes: [{ slug: "", id: 0, name: "", gameModes: [] }],
    setGroups: [
      {
        slug: "",
        year: 0,
        svg: "",
        cardSets: [],
        name: "",
        standard: false,
        icon: "",
      },
    ],
  },
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

//Get metadata
export const getMetadata = createAsyncThunk(
  "metadata/keywords",
  async (_, thunkAPI) => {
    try {
      return await metadataService.getMetadata();
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

export const metadataSlice = createSlice({
  name: "metadata",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMetadata.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMetadata.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.metadata = action.payload;
      })
      .addCase(getMetadata.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
      });
  },
});

export const { reset } = metadataSlice.actions;
export default metadataSlice.reducer;
