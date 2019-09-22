import  React from 'react'
import { Link } from 'react-router-dom' ;

import './side-bar.component.style.scss'

class SideBar extends React.Component {

  render() {
    return (
      <div className="side-bar">
          <div className='side-options'>
         <Link className='side-option' to='/dashboard'>
            DASHBOARD
          </Link>
          <Link className='side-option' to='/projects'>
            PROJECTS
          </Link>
          <Link className='side-option' to='/data'>
            DATA 
          </Link>
        </div>
      </div>
    )
  }
}

export default SideBar