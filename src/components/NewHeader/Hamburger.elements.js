import styled, {keyframes} from 'styled-components'
import {ContentContainer} from '../globalStyles'
import React from 'react'
import img from '../../img/logo.png'

export const HeaderWrapper = styled.div`
  background-color: #bccd5c;
`

export const HeaderContainer = styled.div`
  display: grid
`

export const HeaderContent = styled(ContentContainer)`
  position: relative;
  display: grid;
  grid-template-areas: 'logo right';
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  height: 60px;
  ${ContentContainer}
`

export const Logo = styled.div`
  grid-area: logo;
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

/*export const NavMenu = styled.div`
  display: grid;
  //grid-auto-columns: fit-content(40px);
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
  z-index: 10;
  align-items: center;

  & a {
    grid-template-columns: auto;
    font-size: 1.1rem;
    text-decoration: none;
    color: black;
    padding: 1px 20px 5px 20px;
    border-radius: 20px;
    cursor: pointer;
  }

  @media screen and (max-width: 960px) {
    display: none;
  }
`*/

export const RightMenu = styled.div`
  display: grid;
  grid-area: right;
  grid-template-columns: repeat(4, 1fr);
  grid-template-areas: 'search lang phone menu';
  z-index: 10;
  align-items: center;
  font-size: 1.2rem;
  gap: 10px;

  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: flex-end;
    grid-template-areas: 'search phone menu lang';
  }
`

export const Search = styled.div`
  display: flex;
  grid-area: search;
  cursor: pointer;
  justify-content: center;
`

export const Language = styled.div`
  display: flex;
  grid-area: lang;
  cursor: pointer;
`

export const Phone = styled.div`
  display: flex;
`

export const RedButton = styled.button`
  display: flex;
  justify-content: center;
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
  z-index: 10;
  font-size: 1rem;
  //mix-blend-mode: difference;
`

//HAMBURGER

export const RedHamburgerMenu = styled.div`
  display: none;
  z-index: 9;
  top: 0;
  left: 0;
  right: 0;
  position: fixed;
  height: 100%;
  width: 100%;
`

export const RedMenuSecondaryBackgroundColor = styled.div`
  background: #191919;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: -1;
`

export const RedMenuLayer = styled.div`
  position: relative;
  background: #e20001;
  height: 100%;
  overflow: hidden;
`

const BackgroundEffect = keyframes`
  0% {
    background-position: 0% 0%;
  }
  25% {
    background-position: 40% 10%;
  }
  50% {
    background-position: 0 10%;
  }
  75% {
    background-position: 10% 40%;
  }
  100% {
    background-position: 0% 0%;
  }
`

export const RedMenuCityBackground = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  height: 100%;
  width: 100%;
  opacity: 0;
  background-size: cover;
  background-repeat: no-repeat;
  animation-name: ${BackgroundEffect};
  animation-duration: 30s;
  animation-iteration-count: infinite;
`

export const RWrapper = styled.div`
  position: relative;
`

export const RMenuLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  top: 150px;
`

export const RNav = styled.div`
  display: flex;

  & ul {
    margin: 0;
    padding: 0;

    & li {
      list-style: none;
      font-size: 4rem;
      font-weight: 700;
      cursor: pointer;
      height: 90px;
      overflow: hidden;
      position: relative;
      width: 800px;

      & a {
        position: absolute;
        color: #fff;
        text-decoration: none;

        &:hover {
          color: #191919;
        }
      }
    }
  }
`

export const RInfo = styled.div`
  color: #fff;
  width: 300px;

  & h3 {
    font-size: 1.2rem;
    margin: 8px auto;
  }

  & p {
    margin: 0 auto;
    font-size: 0.8rem;
  }
`

export const RLocations = styled.div`
  position: absolute;
  bottom: -80px;
  color: #fff;
  margin-top: 16px;
  font-size: 0.8rem;
  font-weight: 600;

  & span {
    cursor: pointer;

    &:first-child {
      margin-left: 64px;
    }

    font-weight: 400;
    margin: 0 32px;
    transition: 0.3s ease-in-out;

    &:hover {
      color: #fff;
      background: #191919;
      padding: 8px 24px;
      border-radius: 4px;
    }
`

export const RedParagraph = styled.p`
  font-size: 0.75rem;
  letter-spacing: 0.3rem;
  text-transform: uppercase;
  font-weight: 500;
`

export const RedHeader5 = styled.h5`
  margin-top: 260px;
  font-size: 24px;
  font-weight: 600;
  padding-right: 360px;
`






