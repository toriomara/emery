import styled, { keyframes } from 'styled-components'

export const NavigationsWrapper = styled.div`
  display: grid;
  grid-template-areas: 'logo menu rightMenu';
  grid-template-columns: min-content auto max-content;
  height: 60px;
  //width: 100%;
  align-items: center;
  margin: 0 0 30px 0;
`

export const Menu = styled.div`
  display: grid;
  grid-area: menu;
  grid-auto-flow: column;
  grid-auto-columns: max-content;
  margin: 0 40px 0 40px;
  gap: 40px;
  justify-content: end;
  
  nav {
  
      a {
        position: relative;
        letter-spacing: 1px;
        font-weight: 500;
        text-transform: uppercase;
        color: var(--dark);
				transition: opacity .2s ease-in-out, transform .2s ease-in-out;
        
        ::after {
          display: inline-block;
          position: absolute;
 					content: '';
          width: 100%;
          left: 0;
          bottom: -10px;
          height: 3px;
          border-radius: 10%;
          background-color: var(--red);
          transition: opacity .2s ease-in-out, transform .2s ease-in-out;
          transform-origin: bottom;
					transform: scaleX(0);
        }
        
        :hover::after {
		      transform: scaleX(1);
				}
        
        :hover {
        	color: var(--red);
        }
      }
      
      .active {
      	position: relative;
      	color: var(--red);
      	outline: none;
      	
      	::after {
					transform: scaleX(1);
        }
    	}  
  }

  @media screen and (max-width: 1375px) {
    gap: 35px;
  }
  
  @media screen and (max-width: 1350px) {
  	a {font-weight: 400;}

  }
    
  @media screen and (max-width: 960px) {
    display: none;
  }
`

export const RightMenu = styled.div`
  display: inline-flex;
  grid-area: rightMenu;
  grid-template-columns: min-content auto max-content;
  margin: 0 0 0 20px;
  align-items: center;
  justify-content: end;
  font-size: 20px;
  gap: 10px;
  color: var(--dark);
`

export const RedButton = styled.button`
  display: none;
  justify-content: center;
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
  z-index: 10;
  font-size: 16px;

  @media screen and (max-width: 960px) {
    display: flex;
    margin: 0 15px 0 0;
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
  overflow-y: hidden;
`

export const RedMenuSecondaryBackgroundColor = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: #191919;
  z-index: -1;
`

export const RedMenuLayer = styled.div`
  position: relative;
  background: #e20001;
  height: 100%;
`

const BackgroundEffect = keyframes`
  0% {
    background-position: 0 0;
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
    background-position: 0 0;
  }
`

export const RedMenuCityBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
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






