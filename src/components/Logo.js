import React from 'react'
import styled from "styled-components";
import img from "../img/logo.png";
import {NavLink} from "react-router-dom";

export const StyledLogo = styled.div`
  display: inline-block;
  background-image: url(${img});
  background-size: contain;
  background-repeat: no-repeat;
  width: 120px;
  height: 30px;
  cursor: pointer;
`

const Logo = () => {
    return (
        <NavLink to='/'>
            <StyledLogo/>
        </NavLink>
    )
}

export default Logo;
