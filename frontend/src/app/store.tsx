import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import cardsReducer from "../features/cards/cardsSlice";
import filterReducer from "../features/filter/filterSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cards: cardsReducer,
    filter: filterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
