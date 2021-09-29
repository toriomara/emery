import React from 'react'
import { useTranslation } from 'react-i18next'
import {NavLink} from 'react-router-dom'
import {nav} from './Hamburger.elements'



const MenuItem = ({label, path}) => {

	const { t } = useTranslation()

	return (
		<nav>
			<NavLink to='path'>
				{t(label)}
			</NavLink>
		</nav>
	)
}

export default MenuItem
