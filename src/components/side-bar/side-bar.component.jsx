import  React from 'react'
import { Link } from 'react-router-dom' ;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";

import './side-bar.component.style.scss'

class SideBar extends React.Component {

  render() {
    return (
      <div className="side-bar">
          <div className='side-options'>
          <Link className='side-option' to='/dashboard'>
            <FontAwesomeIcon icon={faBook} />
          </Link>
          <Link className='side-option' to='/projects'>
          <FontAwesomeIcon icon={faCheckSquare} />
          </Link>
          <Link className='side-option' to='/data'>
            <FontAwesomeIcon icon={faCoffee} />
          </Link>
        </div>
      </div>
    )
  }
}

export default SideBar