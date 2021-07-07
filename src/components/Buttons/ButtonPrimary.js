import React from 'react'
import styled from 'styled-components'

const StyledButtonPrimary = styled.button`
  margin: ${props => props.margin || '20px'};
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
  letter-spacing: 1px;

  &:hover {
    background-color: #ba0001;
  }
`

export const ButtonPrimary = ({name, type, onClick, margin}) => {
    return (
        <StyledButtonPrimary onClick={onClick} type={type} margin={margin}>
            {name}
        </StyledButtonPrimary>
    )
}

