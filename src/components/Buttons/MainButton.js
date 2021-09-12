import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  display: inline-flex;
  min-width: 100px;
  justify-content: center;
  align-items: center;
  //width: 100%;
  //height: 45px;
  appearance: none;
  padding: 8px 16px 10px 16px;
  margin: ${props => props.margin || '20px 20px 20px 20px'};
  color: var(--light);
  font-family: inherit;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 400;
  background-color: var(--blue);
  border: 0;
  border-radius: 5px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  
  &:hover {
    opacity: 0.7;
    box-shadow: 0 15px 20px rgba(57,56,56,0.4);
    color: #fff;
    //transform: translateY(-5px);
  }
  
  &:focus {
    outline: none;
  }
`

const HelpButton = styled(StyledButton)`
  color: #ffffff;
  background-color: var(--red);
  
  &:hover {
    opacity: 0.7;
  }
  
  ${StyledButton}
`

const Contour = styled(StyledButton)`
  color: var(--dark);
  border: 1px solid var(--blue);
  background-color: #ffffff;
  box-shadow: none;

  
  &:hover {
    color: #ffffff;
    background-color: var(--blue);
  }
  
  ${StyledButton}
`

export const PrimaryButton = ({name, type, onClick, margin, color, padding}) => {
    return (
        <StyledButton name={name} onClick={onClick} padding={padding} type={type} margin={margin} color={color}>
            {name}
        </StyledButton>
    )
}

export const SecondaryButton = ({name, type, onClick, margin, color, padding}) => {
    return (
        <HelpButton name={name} onClick={onClick} padding={padding} type={type} margin={margin} color={color}>
            {name}
        </HelpButton>
    )
}

export const OutlinedButton = ({name, type, onClick, margin, color, padding}) => {
    return (
        <Contour name={name} onClick={onClick} padding={padding} type={type} margin={margin} color={color}>
            {name}
        </Contour>
    )
}



