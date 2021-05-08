import React from 'react'
import styled from 'styled-components'

const StyledPhone = styled.div`
  display: flex;
  color: #393c41;
  padding: 0 10px;
`

const Phone = () => {
    return (
        <StyledPhone>
            <span>8 800 234-78-78</span>
        </StyledPhone>
    )
}

export default Phone
