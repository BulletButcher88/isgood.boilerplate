import React from 'react'
import SignIn from '../../components/sign-in/sign-in.component'
import SignUp from '../../components/sign-up/sign-up.component'

import './sign-in-and-sign-up.component.style.scss'

class SignInAndSignUp  extends React.Component {

  render() {
    return (
      <h3 className='sign-in-and-sign-up'>
        <SignIn />
        <SignUp />
      </h3>
    )
  }
}
export default SignInAndSignUp
