import React, { Component } from 'react'
import axios from 'axios'

import { FormContainer, Inputs, Buttons } from './styled';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      error: ''
    }
  }

  changeHandler = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  submitHandler = event => {
    event.preventDefault();
    const {username, password} = this.state
    axios.post('https://alf-lambda-notes.herokuapp.com/users/login', {username, password})
      .then( token => {
        console.log(token)
        localStorage.setItem('jwt', token.data)
        localStorage.setItem('username', username)
        window.location.reload()
        this.props.history.push('/notes')
      }).catch( err => {
        console.log(err.body)
      })
  }

  render() {
    return (
      <div>
        <FormContainer onSubmit={this.submitHandler}>
          <Inputs type='text' name='username' value={this.username} onChange={this.changeHandler} placeholder='username' />
          <Inputs type='password' name='password' value={this.password} onChange={this.changeHandler} placeholder='password' />
          <Buttons onClick={this.submitHandler}>Login</Buttons>
        </FormContainer>
      </div>
    )
  }
}
