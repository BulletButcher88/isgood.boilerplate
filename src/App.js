import React from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import LogIn from './pages/login/login.component';
import Header from './components/header/header.component';
import Notifications from './pages/notification/notifications.component'

function App() {
  return (
      <div>
        <Header/>
        <Switch>
         <Route exact path='/' component={ HomePage } />
          <Route path='/login' component={ LogIn } />
          <Route path='/notifications' component={ Notifications } />

        </Switch>
      </div>
  )
}

export default App;
