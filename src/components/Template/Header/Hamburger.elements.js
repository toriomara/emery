import styled, {keyframes} from 'styled-components'

export const NavigationsWrapper = styled.div`
  display: flex;
  //padding: 15px 0;
  height: 60px;
  //margin: 10px 0;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #afb0b1;
  margin-bottom: 30px;
`

export const Menu = styled.ul`
  display: flex;

  li {
    display: inline-block;
    border-left: solid 1px grey;
    line-height: 1;
    margin-left: 16px;
    padding-left: 16px;
     transition: text-shadow .3s;

    &:first-child {
      border-left: 0;
      margin-left: 50px;
      padding-left: 0;
    }

    a {
      border-bottom: 0;
      letter-spacing: 1px;
      text-transform: uppercase;
      color: #393c41;
    }
    
     :hover {
        text-shadow: 0 0 .8px #333, 0 0 .8px #333;
     }
          
     .active {
        text-shadow: 0 0 .8px #333, 0 0 .65px #333;
     }
  
  }

  @media screen and (max-width: 960px) {
    display: none;
`

export const RightMenu = styled.div`
  display: flex;
  grid-template-columns: repeat(auto-fit, minmax(20px, 1fr));

  //grid-template-columns: repeat(4, 1fr);
  //grid-template-areas: 'search lang phone';
  z-index: 10;
  align-items: center;
  font-size: 1.2rem;
  gap: 10px;
  color: #393c41;
`

export const RedButton = styled.button`
  display: none;
  justify-content: center;
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
  z-index: 10;
  font-size: 1rem;
  //mix-blend-mode: difference;

  @media screen and (max-width: 960px) {
    display: flex;
  }
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

  & a {
    cursor: pointer;
    color: white;

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






