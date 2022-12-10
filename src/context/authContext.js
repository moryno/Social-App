import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUSer] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = async (user) => {
    try {
      const { data } = await axios.post(
        "http://localhost:3030/api/auth/login",
        user,
        { withCredentials: true }
      );
      setCurrentUSer(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <UserContext.Provider value={{ currentUser, login }}>
      {children}
    </UserContext.Provider>
  );
};
