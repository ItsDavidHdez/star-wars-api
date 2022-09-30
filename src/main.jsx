import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { CharacterContextProvider } from "./context/CharacterContext";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <CharacterContextProvider>
      <App />
    </CharacterContextProvider>
  </BrowserRouter>
);
