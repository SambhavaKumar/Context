import React, { createContext } from "react";
import "./App.css";
import CompA from "./CompA";

const FirstName = createContext();
const LastName = createContext();

const App = () => {
  return (
    <div>hi</div>
  );
};

export default App;
export { FirstName, LastName };
