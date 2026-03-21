import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { loadUserState } from "./storage";

export const USER_PERSISTENT_STATE = "users";

export interface IUserPersistentState {
  name: string | null;
  isLogined: boolean;
}

export interface IUserState {
  name: string | null;
  isLogined: boolean;
}

const initialState: IUserState = loadUserState(USER_PERSISTENT_STATE);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.isLogined = false;
    },
    login: (state, action: PayloadAction<IUserPersistentState>) => {
      state.name = action.payload.name;
      state.isLogined = action.payload.isLogined;
    },
  },
});

export default userSlice.reducer;
export const userActions = userSlice.actions;
