import React from 'react';
import { Route, Switch } from "react-router-dom";
import './App.scss';

import Header from './components/header/header.component';
import SideBar from './components/side-bar/side-bar.component'
import LogIn from './pages/login/login.component';
import Messages from './pages/messages/messages.component'
import HomePage from './pages/homepage/homepage.component';
import Notifications from './pages/notification/notifications.component'
import Dashboard from './pages/dashboard/dashboard.component'
import Projects from './pages/projects/projects.components'

function App() {
  return (
      <div>
        <Header/>
        <SideBar/>
            <Switch >
              <Route exact path='/' component={ HomePage } />
              <Route path='/login' component={ LogIn } />
              <Route path='/messages' component={ Messages } />
              <Route path='/notifications' component={ Notifications } />
              <Route path='/dashboard' component={ Dashboard } />
              <Route path='/projects' component={ Projects } />

            </Switch>
      </div>
  )
}

export default App;
