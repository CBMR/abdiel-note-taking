import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import axios from 'axios'

import './App.css';
import {MainDiv, Content, Side} from './styled'
import SideBar from './components/sideBar/SideBar';
import ListNotes from './components/listView/ListNotes';
import CreateNote from './components/newView/CreateNote';
import Note from './components/noteView/Note'
import Edit from './components/editView/Edit';
import Authentication from './authentication/Authentication'


class App extends Component {

  state = {
    notes: [],
    userID: ''
  }

  componentDidMount() {
    this.getUser()
    this.getNotes()
  }

  getNotes = () => {
    const token = localStorage.getItem('jwt')
    const requestOptions = {
      headers: {
        userID: this.state.userID,
        authorization: token
      }
    }
    
    axios
    .get('https://alf-lambda-notes.herokuapp.com/notes', requestOptions)
    .then( response => {
      console.log(response)
      this.setState({notes: response.data})
    })
    .catch(err => console.log(err))
  }

  getUser = () => {
    const username = localStorage.getItem('username')
    axios.get('https://alf-lambda-notes.herokuapp.com/users/user', username)
      .then( response => {
        this.setState({userID: response.data.id})
      })
  }

  createNote = note => {
    axios
      .post('https://alf-lambda-notes.herokuapp.com/notes/note/create', note)
      .then( response => {
        this.getNotes()
      })
      .catch(err => console.log(err))
  }  

  render() {
    return (
      <MainDiv className="App">
        <Side>
          <SideBar />
        </Side>
        <Content>
          <Route exact path='/' render={ props => <ListNotes {...props} notes={this.state.notes}/>} />
          <Route path='/create-note' render={ props => <CreateNote {...props} createNote={this.createNote} id={this.state.userID} />} />
          <Route exact path='/note/:id' render={props => <Note {...props} getNotes={this.getNotes} />} />
          <Route path='/note/:id/edit' render={props => <Edit {...props} getNotes={this.getNotes} />} />
        </Content>
      </MainDiv>
    );
  }
}

export default Authentication(App);
