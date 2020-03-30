import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Login } from "./components/ui";
import { CreateNewAccount } from "./components/modules";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Login} />
      <Route exact path="/create-account" component={CreateNewAccount} />
    </div>
  );
}

export default App;
