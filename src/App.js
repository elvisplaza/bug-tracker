import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { NavBar, NoMatch } from "./components/ui";
import { CreateNewAccount, Profile, Home, Login, Application } from "./components/modules";
import "./App.css";

function App() {
  return (
    <section className='App'>
      <NavBar />
      <div className='app_main'>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/home/:userId' component={Home} />
          <Route exact path='/create-account' component={CreateNewAccount} />
          <Route exact path='/profile/:userId' component={Profile} />
          <Route exact path='/app/:profileId' component={Application} />
          <Route path='*' component={NoMatch} />
        </Switch>{" "}
      </div>
    </section>
  );
}

export default App;
