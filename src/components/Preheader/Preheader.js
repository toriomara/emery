import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import styled, {keyframes} from 'styled-components'
import {IoIosArrowDown} from 'react-icons/io'
import img from "../../img/logo.png"
import {MdLanguage, MdSearch} from "react-icons/md"
import {FaBars, FaTimes} from "react-icons/fa"
import {ContentContainer} from "../globalStyles"

const Nav = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
`

export const PreheaderContainer = styled(ContentContainer)`
  display: flex;
  position: relative;
  align-items: center;
  height: 50px;
  margin: 0 auto;
  justify-content: space-between;
  
  ${ContentContainer}
`

const StyledMenu = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  gap: 30px;
  cursor: pointer;

  & a {
    text-decoration: none;
    color: black;
  }

  & a.active {
    color: red;
  }
`

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(180deg);
  }
`

const Rotate = styled.span`
  display: inline-block;
  position: relative;
  margin-left: 4px;
  top: 3px;
  transform-origin: 50% 40%;

  animation: ${rotate} .99s forwards;
`

export const TopLogo = styled.div`
  display: flex;
  background-image: url(${img});
  background-size: contain;
  background-repeat: no-repeat;
  width: 120px;
  height: 30px;
  cursor: pointer;
`

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
`

const Search = styled.div`

`

const Language = styled.div`

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

const Menu = styled.div`
  z-index: 2;
`

export const Preheader = ({isMenuOpen, setIsMenuOpen}) => {
    const show = () => setIsMenuOpen(!isMenuOpen)

    return (
        <Nav>
            <PreheaderContainer>
                <StyledMenu>
                    <NavLink to='/'>
                        <TopLogo/>
                    </NavLink>
                    <NavLink to='/classic'>
                        КОРУНД-Классик
                        <Rotate>
                            <IoIosArrowDown/>
                        </Rotate>
                    </NavLink>
                    <NavLink to='/facade'>
                        КОРУНД-Фасад
                        <Rotate>
                            <IoIosArrowDown/>
                        </Rotate>
                    </NavLink>
                    <NavLink to='/anticorrosive'>
                        КОРУНД-Антикор
                        <Rotate>
                            <IoIosArrowDown/>
                        </Rotate>
                    </NavLink>
                    <NavLink to='/winter'>
                        КОРУНД-Зима
                        <Rotate>
                            <IoIosArrowDown/>
                        </Rotate>
                    </NavLink>
                </StyledMenu>
                <RightMenu>
                    <Search>
                        <MdSearch/>
                    </Search>
                    <Language>
                        <MdLanguage/>
                    </Language>
                    <HiddenMenu isMenuOpen={isMenuOpen}/>
                    <Menu onClick={show}>
                        {isMenuOpen ? <FaTimes/> : <FaBars/>}
                    </Menu>
                </RightMenu>
            </PreheaderContainer>
        </Nav>
    )
}

