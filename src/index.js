import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { UserProvider } from "./context/authContext";
import { DarkModeProvider } from "./context/darkModeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DarkModeProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </DarkModeProvider>
  </React.StrictMode>
);
