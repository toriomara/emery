import React from 'react'
import styled from 'styled-components'

const StyledButtonPrimary = styled.button`
  background-color: #e20001;
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
    background-color: #ba0001;
  }
`

export const ButtonPrimary = ({name, type, onClick}) => {
    return (
        <StyledButtonPrimary onClick={onClick} type={type}>
            {name}
        </StyledButtonPrimary>
    )
}

