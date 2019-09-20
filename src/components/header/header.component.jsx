import React from 'react';
import { Link } from 'react-router-dom' ;

import { ReactComponent as Logo } from '../../asset/is good.svg'
import './header.components.style.scss'

const Header = () => (

  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo'/>
    </Link>
    <div className='options'>
      <Link className='option' to='/login'>
        LOGIN
      </Link>
      <Link className='option' to='/notifications'>
        ALERTS
      </Link>
    </div>
  </div>
)

export default Header;