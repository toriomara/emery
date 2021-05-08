import React, {useState, useEffect} from "react"
import {withRouter, Link} from "react-router-dom"
import Hamburger from "./Hamburger"
import {RedButton, RightMenu, NavigationsWrapper} from './Hamburger.elements'
import {FaBars, FaTimes} from 'react-icons/fa'
import {routesNavi} from '../../../redux/data/routes'
import Logo from '../../Logo'
import {Menu} from './Hamburger.elements'
import Search from '../../SearchBar/Search'
import Language from '../../Language'
import Phone from '../../Phone'

const Header = ({history}) => {
    // State of our Menu
    const [state, setState] = useState({
        initial: false,
        clicked: null,
        menuName: <FaBars/>,
    })
    // State of our button
    const [disabled, setDisabled] = useState(false)

    //Use Effect
    useEffect(() => {
        //Listening for page changes.
        history.listen(() => {
            setState({clicked: false, menuName: <FaBars/>})
        })
    }, [history]);

    // Toggle menu
    const handleMenu = () => {
        disableMenu();
        if (state.initial === false) {
            setState({
                initial: null,
                clicked: true,
                menuName: <FaTimes/>
            });
        } else if (state.clicked === true) {
            setState({
                clicked: !state.clicked,
                menuName: <FaBars/>
            });
        } else if (state.clicked === false) {
            setState({
                clicked: !state.clicked,
                menuName: <FaTimes/>
            });
        }
    };

    //Determine if out menu button should be disabled
    const disableMenu = () => {
        setDisabled(!disabled);
        setTimeout(() => {
            setDisabled(false);
        }, 1200);
    }

    return (
        <NavigationsWrapper>
            <Logo/>
            <Menu>
                {routesNavi.filter((l) => !l.index).map((l) => (
                    <li key={l.label}>
                        <Link to={l.path}>{l.label}</Link>
                    </li>
                ))}
            </Menu>
            <RightMenu>
                <Search/>
                <Language/>
                <Phone/>
                <RedButton disabled={disabled} onClick={handleMenu}>
                    {state.menuName}
                </RedButton>
            </RightMenu>
            <Hamburger state={state}/>
        </NavigationsWrapper>
    )
}

export default withRouter(Header)
