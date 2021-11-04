import React, { useState } from 'react'
import styled from 'styled-components'
import { MdArrowDropDown, MdLanguage } from 'react-icons/md'
import i18next from 'i18next'
import { languages } from '../../../i18n'
import cookies from 'jscookie'
import { useTranslation } from 'react-i18next'
import { useClickOutside } from '../../../utils/useClickOutside'

//https://github.com/fireship-io/229-multi-level-dropdown
//https://github.com/hidjou/classsed-react-localization

const Language = styled.div`
	--bg: var(--light);
  --bg-accent: #484a4d;
  --text-color: var(--dark);
  --nav-size: 60px;
  --border: 1px solid #e8e8e8;
  --border-radius: 5px;
  --speed: .5s; 
`

const LanguageButton = styled.button`
	position: relative;
  display: inline-flex;
  align-items: center;
  gap: 1px;
  appearance: none;
  margin: 8px 16px 10px 16px;
  color: var(--dark);
  font-family: inherit;
  text-transform: uppercase;
  letter-spacing: 1px;
  line-height: 1.5;
  font-weight: 400;
  font-size: 17px;
  background-color: transparent;
  border-radius: 5px;
  transition: all 0.3s ease 0s;
  
  div {
    width: 25px;
  }
  
  &:hover {
    opacity: 0.7;
    color: var(--dark);
  }
  
  &:focus {
    outline: none;
  }
  
  @media screen and (max-width: 1380px) {
    font-size: 16px;
  }
  
  @media screen and (max-width: 1250px) {
    font-size: 15px;
  } 
`

const Menu = styled.ul`
 	position: absolute;
  overflow: hidden;
  width: 150px;
  padding: 15px;
  font-size: 14px;
  background-color: white;
  border: var(--border);
  border-radius: var(--border-radius);
  transition: height var(--speed) ease;
  box-shadow: 0 6px 12px rgb(0 0 0 / 18%);
  z-index: 2;
`

const MenuItem = styled.li`
	position: relative;
  display: flex;
  border-radius: var(--border-radius);
	padding: 10px;
 	color: var(--red);
 	cursor: pointer;
  transition: background var(--speed);
  
  :hover {
  	background-color: #e8e8e8;
	}
`

const FlagIcon = styled.span`
	margin: 0 8px;
`

const ItemButton = styled.button`
  appearance: none;
  background-color: transparent;
`

const SetLang = styled.li`
	display: flex;
	justify-content: start;
	margin: 3px 10px;
	font-weight: 500;
`

export const LanguageBar = () => {

	const currentLanguageCode = cookies.get('i18next') || 'ru'
	const { t } = useTranslation()

	const [open, setOpen] = useState(false)
	const handleClick = () => {setOpen(!open)}

	const menu = useClickOutside(() => {
		setOpen(false)
	})

	return (
		<Language>
			<LanguageButton onClick={handleClick}>
				<MdLanguage/>
				<div>{currentLanguageCode}</div>
				<MdArrowDropDown/>
			</LanguageButton>
			{open && (
				<Menu ref={menu}>
					<SetLang>
						<span className="dropdown-item-text">{t('exp.language')}</span>
					</SetLang>
					{languages.map(({ code, name, countryCode }) =>
						<MenuItem
							key={countryCode}
							onClick={() => {
								i18next.changeLanguage(code)
								handleClick()
							}}
						>
							<ItemButton disabled={code === currentLanguageCode}>
								<FlagIcon style={{ opacity: code === currentLanguageCode ? 0.5 : 1 }}>
										<span
											className={`flag-icon flag-icon-${countryCode}`}
										>
										</span>
								</FlagIcon>
								{name}
							</ItemButton>
						</MenuItem>
					)}
				</Menu>
			)
			}
		</Language>
	)
}

