import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const MainContainer = styled.div `
  display: flex
  flex-direction: column
  align-items: center
`

export const AuthContainer = styled.div `
  display: flex
  justify-content: center
  align-items: center
  margin-top: 200px
  margin-bottom: 20px
`

export const NavLinks = styled(NavLink) `
  font-size: 4rem
  font-weight: bold
  color: gray
  margin: 0 20px
  text-decoration: none

  :hover {
    color: black
  }
`
export const FormContainer = styled.form `
  display: flex
  flex-direction: column
  
`
export const Inputs = styled.input `
  width: 300px;
  height: 50px
  margin-bottom: 20px
  font-size: 2.5rem

  ::placeholder {
    font-size: 2.5rem
    text-align: center
  }
`
export const Buttons = styled.div `
  width: 150px
  height: 50px
  font-size: 3rem
  font-weight: bold
  color: white
  padding: 5px 0
  text-align: center
  background-color: teal
  cursor: pointer
`