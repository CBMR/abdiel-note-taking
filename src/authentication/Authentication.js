import React from 'react';

import Authenticate from './Authenticate'

const Authentication = App => 
  class extends React.Component {  
      state = {
        isLoggedIn: false
      }

    componentDidMount() {
      const token = localStorage.getItem('jwt')
      this.setState({isLoggedIn: token ? true : false}) 
    }

    render() {
      return this.state.isLoggedIn ? <App /> : <Authenticate />
    }
  };

export default Authentication