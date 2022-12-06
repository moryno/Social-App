import { createContext } from "react";

const initialState = {
  currentUser: JSON.parse(localStorage.get("user")) || null,
  isFetching: false,
  error: false,
};

export const UserContext = createContext(initialState);

export const UserProvider = ({ children }) => {
  return <UserContext.Provider>{children}</UserContext.Provider>;
};
