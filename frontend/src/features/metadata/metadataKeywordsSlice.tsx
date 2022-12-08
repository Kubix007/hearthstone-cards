import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IMetadataKeywordsState } from "../../shared/types";
import metadataService from "./metadataKeywordsService";

const initialState: IMetadataKeywordsState = {
  keywords: [
    { id: 0, slug: "", name: "", refText: "", text: "", gameModes: [] },
  ],
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
        state.keywords = action.payload;
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
