import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./components/home/HomePage";

const App = () => {
  return (
    <div className="App">
      <Route exact path="/" component={HomePage} />
    </div>
  );
};

export default App;
