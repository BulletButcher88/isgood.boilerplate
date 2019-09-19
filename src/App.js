import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component'
import HomePage from './pages/homepage/homepage.component'
import LogIn from './pages/login/login.component'

import './App.css';

function App() {
  return (
    <div>
      <Header/>
        <Switch>
          <Route exact path='/' component={ HomePage } />
          <Route exact path='/login' component={ LogIn } />
        </Switch>
    </div>
  );
}

export default App;
