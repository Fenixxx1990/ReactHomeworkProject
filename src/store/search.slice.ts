import { createSlice } from "@reduxjs/toolkit";
import type { IInitialData } from "../Interfaces/Interfaces";

export interface ISearchState {
  items: IInitialData[] | null;
}

const initialState: ISearchState = {
  items: null,
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
    clearItems: (state) => {
      state.items = null;
    },
  },
});

export default searchSlice.reducer;
export const searchActions = searchSlice.actions;
