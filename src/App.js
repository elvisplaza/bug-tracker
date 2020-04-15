import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { NavBar, NoMatch } from "./components/ui";
import { CreateNewAccount, Profile, Home, Login, Application } from "./components/modules";
import "./App.css";

// context
import { UserInfoProvider } from "./context/UserInfoContext";

function App() {
  return (
    <section className='App'>
      <UserInfoProvider>
        <NavBar />
        <div className='app_main'>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route exact path='/home/:userId' component={Home} />
            <Route exact path='/create-account' component={CreateNewAccount} />
            <Route exact path='/profile/:userId' component={Profile} />
            <Route exact path='/app/:appId' component={Application} />
            <Route path='*' component={NoMatch} />
          </Switch>{" "}
        </div>
      </UserInfoProvider>
    </section>
  );
}

export default App;
