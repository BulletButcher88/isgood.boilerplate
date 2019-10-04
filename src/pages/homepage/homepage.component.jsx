import React from 'react'
import './homepage.component.style.scss'

class HomePage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: [],
      currentUser: ''
      
    }
  }

  componentDidMount() {
    const { currentUser }  = this.props;
    this.setState({
      currentUser: currentUser
    })
  
  }


  render() {
    console.log(this.state.currentUser)

    return (
      <h3 className='homepage'>
        
        homepage {this.state.currentUser}
      </h3>
    )
  }
}

export default HomePage
