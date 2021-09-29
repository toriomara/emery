import React, {useState, useEffect} from 'react'
import {withRouter, NavLink} from 'react-router-dom'
import Hamburger from './Hamburger'
import {RedButton, RightMenu, NavigationsWrapper} from './Hamburger.elements'
import {FaBars, FaTimes} from 'react-icons/fa'
import Logo from '../../Logo'
import {Menu} from './Hamburger.elements'
import Search from '../../SearchBar/Search'
import { LanguageBar } from '../../Language'
import Phone from '../../Phone'
import {useSelector} from 'react-redux'
import {selectRoutes} from '../../../features/routeSlice'
import { useTranslation } from 'react-i18next'

const Header = ({label, path, history}) => {
    // State of Menu
    const [state, setState] = useState({
        initial: false,
        clicked: null,
        menuName: <FaBars/>
    })

    // State of button
    const [disabled, setDisabled] = useState(false)

    //Use Effect
    useEffect(() => {
            //Listening for page changes
            let cleanupFunction = false
            history.listen(() => {
                if (!cleanupFunction)
                    setState({clicked: false, menuName: <FaBars/>})
            })
            return () => {
                cleanupFunction = true
            }
        }, [history]
    )

    // Toggle menu
    const handleMenu = () => {
        disableMenu()
        if (state.initial === false) {
            setState({
                initial: null,
                clicked: true,
                menuName: <FaTimes/>
            })
        } else if (state.clicked === true) {
            setState({
                clicked: !state.clicked,
                menuName: <FaBars/>
            })
        } else if (state.clicked === false) {
            setState({
                clicked: !state.clicked,
                menuName: <FaTimes/>
            })
        }
    }

    //Determine if out menu button should be disabled
    const disableMenu = () => {
        setDisabled(!disabled);
        setTimeout(() => {
            setDisabled(false)
        }, 1200)
    }

    const { t } = useTranslation()

    const routesNavi = useSelector(selectRoutes)

    return (
        <NavigationsWrapper>
            <Logo/>
            <Menu>
                <nav>
                    <NavLink to='/'>
                        {t('nav_home')}
                    </NavLink>
                </nav>
                {routesNavi.map((l) => (
                    <nav key={l.label}>
                        <NavLink exact to={l.path}>{t(l.label)}</NavLink>
                    </nav>
                ))}
            </Menu>
            <RightMenu>
                <Search/>
                <LanguageBar/>
                <Phone/>
                <RedButton
                  disabled={disabled}
                  onClick={handleMenu}>
                    {state.menuName}
                </RedButton>
            </RightMenu>
            <Hamburger state={state}/>
        </NavigationsWrapper>
    )
}

export default withRouter(Header)
