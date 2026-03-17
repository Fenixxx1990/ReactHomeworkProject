import { createContext, type Context } from "react";
import type { UserContextType } from "./User.Context.Interface";

const defaultContextValue: UserContextType = {
  userData: null,
  setUserData: () => {
    console.warn("setUserData called outside of UserProvider");
  },
};

export const UserContext: Context<UserContextType> =
  createContext(defaultContextValue);
