import React from 'react';
import { Link } from 'react-router-dom' ;
import { ReactComponent as Logo } from '../../asset/Frame.svg';
import { SearchBar } from '../searchbar/search-bar.component';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faComments, faUser } from "@fortawesome/free-solid-svg-icons";


import './header.component.style.scss'

class Header extends React.Component {

  constructor() {
    super();

    this.state = {
      data: [],
      searchFeild: ''
    }
  }

    // mount account user API and select project or data end points to disply.
    componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ data: users }))
    }
  
    handleChange = (e) => {
      this.setState({ searchFeild: e.target.value})
    }

render() {

      // function to handle search bar input to be letter sensitive, to what renders in CardList
      const { data, searchFeild } = this.state;
      const filteredData = data.filter(data => 
        data.name.toLowerCase().includes(searchFeild.toLowerCase()))

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
          <Link className='option' to='/login'>
          <FontAwesomeIcon icon={faUser} />
          </Link>
        </div>
      </div>

    )
  }
}

export default Header;