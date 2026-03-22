import { configureStore } from "@reduxjs/toolkit";
import userSlice, { USER_PERSISTENT_STATE } from "./user.slice";
import { saveUserState, saveFavoritesState } from "./storage";
import searchSlice from "./search.slice";
import favoritesSlice from "./favorites.slice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    search: searchSlice,
    favorites: favoritesSlice,
  },
});

const selectUserState = (state: RootState) => state.user;
const selectFavoritesState = (state: RootState) => state.favorites;

let previousUserState = selectUserState(store.getState());
let previousFavoritesState = selectFavoritesState(store.getState());

store.subscribe(() => {
  const currentState = store.getState();
  const currentUserState = selectUserState(currentState);
  const currentFavoritesState = selectFavoritesState(currentState);

  // Сохраняем состояние пользователя, если оно изменилось
  if (!isEqual(previousUserState, currentUserState)) {
    saveUserState(currentUserState, USER_PERSISTENT_STATE);
    previousUserState = currentUserState;
  }

  // Сохраняем состояние фаворитов, если оно изменилось
  if (!isEqual(previousFavoritesState, currentFavoritesState)) {
    saveFavoritesState(currentFavoritesState);
    previousFavoritesState = currentFavoritesState;
  }
});

function isEqual(a: any, b: any): boolean {
  return JSON.stringify(a) === JSON.stringify(b);
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
