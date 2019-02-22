import React from 'react';
import {Route} from 'react-router-dom'
import Login from './Login';
import SignUp from './SignUp'
import { NavLinks, AuthContainer, MainContainer } from './styled';

const Authenticate = () => {
    return (
      <MainContainer>
        <AuthContainer>
          <>
            <NavLinks 
              to='/users/login'
              activeStyle={{color: 'black', textDecoration: 'underline'}}>
              Log in
            </NavLinks>
          </>
          <>
            <NavLinks 
              to='/users/signup'
              activeStyle={{color: 'black', textDecoration: 'underline'}}>
              Sign Up
            </NavLinks>
          </>
        </AuthContainer>
        <div>
          <Route path='/users/login' render = { props => <Login {...props}/>} />
          <Route path='/users/signup' render = { props => <SignUp {...props}/>} />
        </div>
      </MainContainer>
    );
  
}

export default Authenticate