import React from 'react';
import { Link } from 'react-router-dom' ;
import { ReactComponent as Logo } from '../../asset/Frame.svg';
import { SearchBar } from '../searchbar/search-bar.component';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faComments, faUser } from "@fortawesome/free-solid-svg-icons";

import { auth } from '../../firebase/firebase.utils'


import './header.component.style.scss'

class Header extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: [],

    }
  }

    // mount API that handles isgood clients data, settings, etc.
    // Below is search-bar selector that searches the API for relivant information. 

    // componentDidMount() {
    //   fetch('https://isgood.ai.com/users')
    //   .then(response => response.json())
    //   .then(users => this.setState({ data: users }))
    // }
  
    // handleChange = (e) => {
    //   this.setState({ searchFeild: e.target.value})
    // }

render() {

      // function that will handle search bar input to be letter sensitive, to renders in cards.... make a CardList component for this
      // const { data, searchFeild } = this.state;
      // const filteredData = data.filter(data => 
      //   data.name.toLowerCase().includes(searchFeild.toLowerCase()))


      // firebase props for google sign in
      const { currentUser } = this.props;
      console.log(currentUser)


  return (
      <div className='header'>
        <Link className='logo-container' to='/'>
          <Logo className='logo'/>
        </Link>
          
           <SearchBar 
             type="search"
             placeholder="search..."
             style={{color: '#939292'}}
             handleChange={this.handleChange}
            />

        <div className='options'>
         <Link className='option' to='/messages'>
            <FontAwesomeIcon icon={faComments} />
          </Link>
          <Link className='option' to='/notifications'>
            <FontAwesomeIcon icon={faBell} />
          </Link>
          
          <Link className='option' to='/sign-in-and-sign-up'>
            <FontAwesomeIcon icon={faUser} />
          </Link>
          {
          currentUser ?
          <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
          :
          <Link className='option' to='/sign-in-and-sign-up'>SIGN IN</Link>
           }
        </div>
      </div>
    )
  }
}

export default Header;