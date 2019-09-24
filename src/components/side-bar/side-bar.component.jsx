import  React from 'react'
import { Link } from 'react-router-dom' ;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiagnoses, faCheckSquare, faChartBar } from "@fortawesome/free-solid-svg-icons";


import './side-bar.component.style.scss'

class SideBar extends React.Component {

  render() {
    return (
      <div className="side-bar">
          <div className='side-options'>
          <Link className='side-option' to='/dashboard'>
            <FontAwesomeIcon icon={faDiagnoses} />
          </Link>
          <Link className='side-option' to='/projects'>
          <FontAwesomeIcon icon={faCheckSquare} />
          </Link>
          <Link className='side-option' to='/data-page'>
            <FontAwesomeIcon icon={faChartBar} />
          </Link>
        </div>
      </div>
    )
  }
}

export default SideBar