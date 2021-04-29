import React, { createContext } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import FormStore from "./store/FormStore";

export const Context = createContext(null);

ReactDOM.render(
  <Context.Provider
    value={{
      formData: new FormStore(),
    }}
  >
    <App />
  </Context.Provider>,
  document.getElementById("root")
);
