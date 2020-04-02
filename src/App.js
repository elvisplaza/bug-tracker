import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Login, NavBar } from "./components/ui";
import { CreateNewAccount } from "./components/modules";
import "./App.css";

function App() {
  const [_isUser, setIsUser] = useState(true);
  return (
    <div className='App'>
      <Route exact path='/' component={Login} />
      <Route exact path='/create-account' component={CreateNewAccount} />
      {_isUser && (
        <NavBar>
          <Route path='/organization' component={NavBar}></Route>
        </NavBar>
      )}
    </div>
  );
}

export default App;
