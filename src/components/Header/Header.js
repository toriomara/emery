import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import img from '../img/logo.png'
import styled from "styled-components"
import {FaBars, FaTimes} from "react-icons/fa"

const StyledHeader = styled.section`
  display: flex;
  position: sticky;
  z-index: 2;
  top: 0;
  left: 0;
  right: 0;
  justify-content: space-between;
  align-items: center;
  padding: 15px 25px 25px 25px;
`

const StyledLogo = styled.div`
  display: flex;
  background-image: url(${img});
  background-size: contain;
  background-repeat: no-repeat;
  width: 120px;
  height: 30px;
  cursor: pointer;
`

const StyledMenu = styled.span`
  display: flex;
  font-size: 1rem;
  gap: 1.5rem;

  & a {
    text-decoration: none;
    text-transform: uppercase;
    color: black;
    font-weight: 500;
  }
`

const StyledRightMenu = styled.div`
  display: flex;
  gap: 1.4rem;
`

const HiddenMenu = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 1rem;
  justify-content: space-between;
  align-items: center;

  & a {
    display: flex;
    text-decoration: none;
    text-transform: uppercase;
    color: black;
    font-weight: 500;
    z-index: 0;
    position: relative;

    ${({isMenuOpen}) => isMenuOpen && `
    visibility: hidden;
  `}
  }
`

const StyledIcon = styled.span`
  display: block;
  position: relative;
  top: 2px;
`

export const Header = ({isMenuOpen, setIsMenuOpen}) => {
    const show = () => setIsMenuOpen(!isMenuOpen)

    return (
        <StyledHeader>
            <StyledLogo/>
            <StyledMenu>
                <Link to='/'>Model S</Link>
                <Link to='/'>Model 3</Link>
                <Link to='/'>Model X</Link>
                <Link to='/'>Model Y</Link>
                <Link to='/'>Solar Roof</Link>
                <Link to='/'>Solar Panels</Link>
            </StyledMenu>
            <StyledRightMenu>
                <HiddenMenu isMenuOpen={isMenuOpen}>
                    <Link to='/'>Shop</Link>
                    <Link to='/login'>Tesla Account</Link>
                </HiddenMenu>
                <StyledIcon onClick={show}>
                    {isMenuOpen ? <FaTimes/> : <FaBars/>}
                </StyledIcon>
            </StyledRightMenu>
        </StyledHeader>
    )
}

