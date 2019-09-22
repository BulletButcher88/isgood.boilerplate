import  React from 'react'
import { Link } from 'react-router-dom' ;

import './side-bar.component.style.scss'

class SideBar extends React.Component {

  render() {
    return (
      <div className="side-bar">
          <div className='side-options'>
          <Link className='side-option' to='/dashboard'>
            D
          </Link>
          <Link className='side-option' to='/projects'>
            P
          </Link>
          <Link className='side-option' to='/data'>
            D
          </Link>
        </div>
      </div>
    )
  }
}

export default SideBar