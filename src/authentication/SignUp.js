import React, { Component } from 'react'
import axios from 'axios'
import { FormContainer, Inputs, Buttons } from './styled';

export default class SignUp extends Component {
  state = {
    first_name: '',
    last_name: '',
    username: '',
    password: '',
  }

  changeHandler = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  submitHandler = event => {
    event.preventDefault()
    console.log(this.state)
    axios.post('https://alf-lambda-notes.herokuapp.com/users/register', this.state)
      .then( token => {
        localStorage.setItem('jwt', token.data)
        localStorage.setItem('username', this.state.username)
        this.props.history.push('/notes')
        window.location.reload()
      })
  }

  render() {
    return (
      <div>
        <FormContainer onSubmit={this.submitHandler}>
          <Inputs type='text' name='first_name' value={this.first_name} onChange={this.changeHandler} placeholder='first name' />
          <Inputs type='text' name='last_name' value={this.last_name} onChange={this.changeHandler} placeholder='last name' />
          <Inputs type='text' name='username' value={this.username} onChange={this.changeHandler} placeholder='username' />
          <Inputs type='password' name='password' value={this.password} onChange={this.changeHandler} placeholder='password' />
          <Buttons onClick={this.submitHandler}>Sign Up</Buttons>
        </FormContainer>
      </div>
    )
  }
}
