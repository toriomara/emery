import React from 'react'
import styled from 'styled-components'

const StyledButtonSecondary = styled.button`
  background-color: transparent;
  border: 3px solid #171a20;
  width: 100%;
  padding: 10px 40px;
  border-radius: 3rem;
  text-transform: uppercase;
  color: #171a20;
  font-weight: 600;
  cursor: pointer;
  transition: all .2s ease-in-out;
  outline: none;

  &:hover {
    background-color: #171a20;
    color: white;
  }
`

export const ButtonSecondary = ({name, type, onClick}) => {
    return (
        <StyledButtonSecondary onClick={onClick} type={type}>
            {name}
        </StyledButtonSecondary>
    )
}

