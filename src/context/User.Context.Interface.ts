export interface User {
  name: string;
  isLogined: boolean;
}

export interface UserContextType {
  userData: User | null;
  setUserData: (userData: User | null) => void;
}

export interface UserProviderProps {
  children: React.ReactNode;
}
