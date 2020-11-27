import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import ProjectsPage from "./components/projects/ProjectsPage";
import ContactPage from "./components/contact/ContactPage";

const App = () => {
  return (
    <div className="App">
      <Route exact path="/" component={HomePage} />
      <Route path="/projects" component={ProjectsPage} />
      <Route path="/contact" component={ContactPage} />
    </div>
  );
};

export default App;
