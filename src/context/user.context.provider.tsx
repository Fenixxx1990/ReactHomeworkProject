import { useState } from "react";
import { UserContext } from "./user.context";
import type { User, UserProviderProps } from "./User.Context.Interface";

export const UserContextProvider: React.FC<UserProviderProps> = ({
  children,
}) => {
  const [userData, setUserData] = useState<User | null>(() => {
    try {
      const savedUsers = localStorage.getItem("users");
      if (savedUsers) {
        const users: User[] = JSON.parse(savedUsers);
        const loggedInUser = users.find((user) => user.isLogined === true);
        return loggedInUser || null;
      }
      return null;
    } catch (error) {
      console.error("Ошибка инициализации состояния из localStorage:", error);
      return null;
    }
  });

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};
