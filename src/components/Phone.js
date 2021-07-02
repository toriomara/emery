import React from 'react'
import styled from 'styled-components'
import {NavLink} from "react-router-dom";

const StyledPhone = styled.div`
  display: flex;
  color: #393c41;
  padding: 0 10px;
  & a {
    color: black;
  }
`

const Phone = () => {
    return (
        <StyledPhone>
            <a href='tel:+78002347878'><span>8 800 234-78-78</span></a>
        </StyledPhone>
    )
}

export default Phone
