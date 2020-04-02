import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Login, NavBar, Profile, NoMatch } from "./components/ui";
import { CreateNewAccount } from "./components/modules";
import "./App.css";

function App() {
  const [_isUser, setIsUser] = useState(true);
  return (
    <section className='App'>
      <NavBar />
      <div className='app_main'>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/create-account' component={CreateNewAccount} />
          <Route exact path='/home/:userId' component={Profile} />
          <Route path='*' component={NoMatch} />
        </Switch>{" "}
      </div>
    </section>
  );
}

export default App;
