import React, {useState, useEffect} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import styled, {keyframes} from 'styled-components'
import {NavLink} from 'react-router-dom'
import {ContentContainer} from '../globalStyles'
import img from "../../img/logo.png"
import {IoIosArrowDown} from "react-icons/io"
import {MdLanguage, MdSearch} from "react-icons/md"

const Nav = styled.nav`
  background: #eaeaea;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 1;
`

const NavbarContainer = styled(ContentContainer)`
  display: flex;
  justify-content: space-between;
  height: 50px;
  position: relative;
  align-items: center;

  ${ContentContainer}
`

const TopLogo = styled.div`
  display: flex;
  background-image: url(${img});
  background-size: contain;
  background-repeat: no-repeat;
  width: 120px;
  height: 30px;
  cursor: pointer;
`

const StyledMenu = styled.div`
  display: flex;
  align-items: center;
  font-size: 13px;
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

const NavMenu = styled.div`
  display: flex;
  gap: 30px;

  @media screen and (max-width: 960px) {
    display: none;
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

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
  font-size: 1.2rem;
  justify-content: space-between;
  gap: 8px;

  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: flex-end;
  }
`

const Search = styled.div`
  cursor: pointer;

`

const Language = styled.div`
  cursor: pointer;

`

const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    justify-content: end;
    color: #101522;
    //position: absolute;
    align-items: center;
    //top: 0;
    //right: 0;
    //transform: translate(-100%, 60%);
    font-size: 1.2rem;
    cursor: pointer;
  }
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
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
  }
`

export const PreHeader = ({isMenuOpen, setIsMenuOpen}) => {
    const show = () => setIsMenuOpen(!isMenuOpen)

    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click);

    return (
        <Nav>
            <NavbarContainer>
                <StyledMenu>
                    <NavLink to='/'>
                        <TopLogo/>
                    </NavLink>
                    <NavMenu>
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
                    </NavMenu>
                </StyledMenu>
                <RightMenu>
                    <Search>
                        <MdSearch/>
                    </Search>
                    <Language>
                        <MdLanguage/>
                    </Language>

                    {/*<MobileIcon onClick={handleClick}>
                        {click ? <FaTimes/> : <FaBars/>}
                    </MobileIcon>*/}

                    <HiddenMenu isMenuOpen={isMenuOpen}/>
                    <Menu onClick={show}>
                        {isMenuOpen ? <FaTimes/> : <FaBars/>}
                    </Menu>

                </RightMenu>
            </NavbarContainer>
        </Nav>
    )
}

