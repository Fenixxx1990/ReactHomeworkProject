import { useContext, type ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/user.context";

export const RequireAuth = ({ children }: { children: ReactNode }) => {
  const { userData } = useContext(UserContext);

  if (!userData?.isLogined) {
    return <Navigate to="/auth/login" replace />;
  }
  return children;
};
