import React from 'react'
import {Title, Button, MainDiv, StyledLink} from './styled'

export default function (props) {
  return (
    <MainDiv>
      <Title>Lambda <br /> Notes</Title>
      <Button>
        <StyledLink to={`/notes/${props.id}`}>View your Notes</StyledLink>
      </Button>
      <Button>
        <StyledLink to={'/create-note'}>+ Create New Note</StyledLink>
      </Button>
    </MainDiv>
  )
}