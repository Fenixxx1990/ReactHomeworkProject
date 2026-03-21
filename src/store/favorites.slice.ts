import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IInitialData } from "../Interfaces/Interfaces";
import { loadFavorites } from "./storage"; // Прямой импорт

const FAVORITES_PERSISTENT_STATE = "favorites";

export interface IFavoritesState {
  [name: string]: { items: IInitialData[] };
}

// Инициализация состояния — вызываем loadFavorites напрямую
const initialState: IFavoritesState =
  loadFavorites(FAVORITES_PERSISTENT_STATE) || {};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<IInitialData>) => {
      const item = action.payload;
      const [userName] = Object.keys(state);

      if (!userName) {
        console.warn("No user in favorites state, cannot add favorite");
        return;
      }

      if (!state[userName]) {
        state[userName] = { items: [] };
      }

      const existingIndex = state[userName].items.findIndex(
        (i) => i.id === item.id,
      );
      if (existingIndex === -1) {
        state[userName].items.push(item);
      } else {
        console.warn(`Item with id ${item.id} already exists in favorites`);
      }
    },

    removeFavorite: (state, action: PayloadAction<string>) => {
      const itemId = action.payload;
      const [userName] = Object.keys(state);

      if (!userName) {
        console.warn("No user in favorites state, cannot remove favorite");
        return;
      }

      if (!state[userName] || !state[userName].items) {
        console.warn(`User ${userName} not found or has no favorites`);
        return;
      }

      state[userName].items = state[userName].items.filter(
        (item) => item.id !== itemId,
      );
    },

    reloadFavorites: () => {
      // Перезагружаем состояние через loadFavorites
      return loadFavorites(FAVORITES_PERSISTENT_STATE) || {};
    },
  },
});

export default favoritesSlice.reducer;
export const favoritesActions = favoritesSlice.actions;
