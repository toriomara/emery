import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import {NavLink} from 'react-router-dom'
import styled from 'styled-components'
import cookies from 'jscookie'
import { languages } from '../../../i18n'

const StyledMenu = styled.div`
  display: grid;
  grid-area: menu;
  grid-auto-flow: column;
  grid-auto-columns: max-content;
  margin: 0 40px 0 40px;
  gap: 40px;
  font-size: 17px;
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

  @media screen and (max-width: 1380px) {
    gap: 25px;
    font-size: 15px;
  }
        
  @media screen and (max-width: 1300px) {
    gap: 25px;
    font-size: 14px;
  }   
  
  @media screen and (max-width: 1250px) {
    gap: 20px;
    font-size: 13px;
  } 
    
  @media screen and (max-width: 1140px) {
    display: none;
  }
`

const HeaderMenu = () => {
	const currentLanguageCode = cookies.get('i18next') || 'ru'
	const currentLanguage = languages.find(l => l.code === currentLanguageCode)
	const { t } = useTranslation()

	useEffect(() => {
		document.body.dir = currentLanguage.dir || 'ltr'
	}, [currentLanguage, t])

	return (
		<StyledMenu>
			<nav>
				<NavLink exact to='/'>
					{t('main_menu.nav_home')}
				</NavLink>
			</nav>
			<nav>
				<NavLink to='/production'>
					{t('main_menu.nav_production')}
				</NavLink>
			</nav>
			<nav>
				<NavLink to='/documentation'>
					{t('main_menu.nav_documentation')}
				</NavLink>
			</nav>
			<nav>
				<NavLink to='/distribution'>
					{t('main_menu.nav_distribution')}
				</NavLink>
			</nav>
			<nav>
				<NavLink to='/news'>
					{t('main_menu.nav_news')}
				</NavLink>
			</nav>
			<nav>
				<NavLink to='/contacts'>
					{t('main_menu.nav_contacts')}
				</NavLink>
			</nav>
		</StyledMenu>

	)
}

export default HeaderMenu
