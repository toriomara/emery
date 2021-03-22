import React from 'react'
import styled from 'styled-components'

const StyledButtonPrimary = styled.button`
  background-color: #3e6ae1;
  border: none;
  padding: 12px 40px;
  border-radius: 3rem;
  color: white;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  margin-bottom: 2rem;
  transition: all 0.4s;

  &:hover {
    background-color: #3457b1;
  }
`

export const ButtonPrimary = ({name, type, onClick}) => {
    return (
        <StyledButtonPrimary onClick={onClick} type={type}>
            {name}
        </StyledButtonPrimary>
    )
}

