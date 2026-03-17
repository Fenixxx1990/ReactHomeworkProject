import { useState } from "react";
import { UserContext } from "./user.context";

export const UserContextProvider = ({ children }) => {
  const [userData, setUserData] = useState(() => {
    try {
      const savedUsers = localStorage.getItem("users");
      if (savedUsers) {
        const users = JSON.parse(savedUsers);
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
