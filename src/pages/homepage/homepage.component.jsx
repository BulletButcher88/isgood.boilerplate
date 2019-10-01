import React from 'react'
import './homepage.component.style.scss'

class HomePage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: [],
    }
  }


  render() {

    const { currentUser } = this.props;
    console.log(currentUser)

    return (
      <h3 className='homepage'>
        homepage
      </h3>
    )
  }
}

export default HomePage
