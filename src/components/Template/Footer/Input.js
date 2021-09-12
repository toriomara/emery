import React, {forwardRef} from 'react'
import styled, {css} from 'styled-components'

const SharedStyles = css`
  display: block;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: ${props => props.margin || '4px 0 16px 0'};
  border-radius: 4px;
  border: 1px solid var(--grey);
  padding: 8px 16px 8px 16px;
  outline: none;
  font-size: 16px;
  color: var(--dark);
  transition: 0.3s;
  
    :focus {
      border: 1px solid var(--blue);
      opacity: 0.7;
      box-shadow: 0 15px 20px rgba(57, 56, 56, 0.4);
      transition: all .3s;
    }
`

const StyledInput = styled.input`
  ${SharedStyles}
`

export const Input = forwardRef((props, ref) => {
    return (
        <StyledInput
            inputRef={ref}
            {...props}
        />
    )
})