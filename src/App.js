import React from 'react';
import { Route, Switch } from "react-router-dom";
import './App.scss';

import Header from './components/header/header.component';
import SideBar from './components/side-bar/side-bar.component'
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Messages from './pages/messages/messages.component'
import HomePage from './pages/homepage/homepage.component';
import Notifications from './pages/notification/notifications.component'
import Dashboard from './pages/dashboard/dashboard.component'
import Projects from './pages/projects/projects.components'
import DataPage from './pages/data-page/data.page.componet'

// firebase auth makes our App component a class to handle currentUser
import { auth, createUserProfileDocument } from './firebase/firebase.utils'


class App extends React.Component {
  constructor() {
    super() 
    this.state = {
      currentUser: null
    }
  }

  // firebase default setState for currentUser
  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        
        userRef.onSnapshot(snapShot => {
          this.setState( {
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          }, () => {
            console.log(this.state)
          }
          );
        });
      }
      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {


    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <SideBar/>
            <Switch >
              <Route 
                exact path='/' 
                component={ HomePage } 
                />

              <Route path='/sign-in-and-sign-up' component={ SignInAndSignUp } />
              <Route path='/messages' component={ Messages } />
              <Route path='/notifications' component={ Notifications } />
              <Route path='/dashboard' component={ Dashboard } />
              <Route path='/projects' component={ Projects } />
              <Route path='/data-page' component={ DataPage } />

            </Switch>
      </div>
  )
  }
}

export default App;
