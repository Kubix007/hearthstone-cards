import { createSlice } from "@reduxjs/toolkit";
import { ISelectedCard } from "../../shared/types";

const initialState: ISelectedCard = {
  selectedCard: {
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
  selectedIndex: 0,
};

export const selectedCardSlice = createSlice({
  name: "selectedCard",
  initialState,
  reducers: {
    reset: (state) => initialState,
    setSelectedCard: (state, action) => {
      state.selectedCard = action.payload;
    },
    setSelectedIndex: (state, action) => {
      state.selectedIndex = action.payload;
    },
  },
});

export const { reset, setSelectedCard, setSelectedIndex } =
  selectedCardSlice.actions;
export default selectedCardSlice.reducer;
