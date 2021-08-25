import React, {forwardRef} from 'react'
import styled, {css} from 'styled-components'

const SharedStyles = css`
  background-color: #ffffff;
  padding: 8px;
  border-radius: 4px;
  display: block;
  width: 100%;
  height: 100%;
  margin: 4px 0 4px 0;
  border: 1px solid #a9aaad;
  font-size: 1rem;
  color: #656880;
  transition: 0.3s;
  
    &:focus {
      border: 1px #222222 solid;
      box-shadow: 0 10px 36px rgba(0,0,0,.15);
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