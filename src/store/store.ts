import { configureStore } from "@reduxjs/toolkit";
import userSlice, { USER_PERSISTENT_STATE } from "./user.slice";
import { saveUserState } from "./storage";
import searchSlice from "./search.slice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    search: searchSlice,
  },
});

const selectUserState = (state: RootState) => state.user;

let previousUserState = selectUserState(store.getState());

store.subscribe(() => {
  const currentState = store.getState();
  const currentUserState = selectUserState(currentState);

  if (!isEqual(previousUserState, currentUserState)) {
    saveUserState(currentUserState, USER_PERSISTENT_STATE);
    previousUserState = currentUserState;
  }
});

function isEqual(a: any, b: any): boolean {
  return JSON.stringify(a) === JSON.stringify(b);
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
