import React from 'react'
import styled from 'styled-components'

export const StyledButtonPrimary = styled.button`
  margin: ${props => props.margin || '20px 20px 20px 20px'};
  color: ${props => props.color || 'white'};
  padding: ${props => props.padding || '12px 40px'};
  background-color: #e20001;
  border: none;
  border-radius: 0.5rem 0.5rem 0.5rem 0.5rem;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  transition: all 0.4s;
  letter-spacing: 1px;

  &:hover {
    background-color: #ba0001;
  }
`

const StyledButtonSecondary = styled.button`
  background-color: transparent;
  border: 3px solid #171a20;
  width: 100%;
  padding: 10px 40px;
  border-radius: 0.5rem;
  text-transform: uppercase;
  color: #171a20;
  font-weight: 600;
  cursor: pointer;
  transition: all .2s ease-in-out;
  
  &:hover {
    background-color: #171a20;
    color: white;
  }
`

export const ButtonPrimary = ({name, type, onClick, margin, color, padding}) => {
    return (
        <StyledButtonPrimary onClick={onClick} padding={padding} type={type} margin={margin} color={color}>
            {name}
        </StyledButtonPrimary>
    )
}

export const ButtonSecondary = ({name, type, onClick}) => {
    return (
        <StyledButtonSecondary onClick={onClick} type={type}>
            {name}
        </StyledButtonSecondary>
    )
}




