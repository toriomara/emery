import React, {useState, useEffect} from "react"
import {withRouter, Link, NavLink} from "react-router-dom"
import Hamburger from "./Hamburger"
import {
    Language,
    MenuContainer,
    HeaderWrapper,
    NavMenu,
    Phone,
    RedButton,
    RedContainer,
    RedInnerHeader,
    RightMenu,
    Search, HeaderContainer, HeaderContent,
}
    from './Hamburger.elements'
import {Logo, TopLogo} from "./Hamburger.elements"
import {MdLanguage, MdSearch} from "react-icons/md";
import {FaBars, FaTimes} from "react-icons/fa"
import {ContentContainer} from "../globalStyles";
import {Menu} from "../Menu/Menu";
//import {Logo} from "../Footer/Footer.elements";

const Header = ({history}) => {
    // State of our Menu
    const [state, setState] = useState({
        initial: false,
        clicked: null,
        menuName: "Меню",
    });
    // State of our button
    const [disabled, setDisabled] = useState(false)

    //Use Effect
    useEffect(() => {
        //Listening for page changes.
        history.listen(() => {
            setState({clicked: false, menuName: "Меню"})
        });
    }, [history]);

    // Toggle menu
    const handleMenu = () => {
        disableMenu();
        if (state.initial === false) {
            setState({
                initial: null,
                clicked: true,
                menuName: "Закрыть"
            });
        } else if (state.clicked === true) {
            setState({
                clicked: !state.clicked,
                menuName: "Меню"
            });
        } else if (state.clicked === false) {
            setState({
                clicked: !state.clicked,
                menuName: "Закрыть"
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
        <HeaderWrapper>
            <HeaderContainer>
                <HeaderContent>
                    <Logo>
                        <NavLink to='/'>
                            <TopLogo/>
                        </NavLink>
                    </Logo>
                    {/*<NavMenu>
                    <NavLink exact to='/'>Главная</NavLink>
                    <NavLink to='/production'>Продукция</NavLink>
                    <NavLink to='/documentation'>Документация</NavLink>
                    <NavLink to='/distribution'>Дистрибьюция</NavLink>
                    <NavLink to='/news'>Новости</NavLink>
                    <NavLink to='/contacts'>Контакты</NavLink>
                    <NavLink to='/account'>Account</NavLink>
                    </NavMenu>*/}
                    <RightMenu>
                        <Search>
                            <MdSearch/>
                        </Search>
                        <Language>
                            <MdLanguage/>
                        </Language>
                        <Phone>
                            <span>8 800 234-78-78</span>
                        </Phone>
                        <RedButton disabled={disabled} onClick={handleMenu}>
                            {state.menuName}
                        </RedButton>
                    </RightMenu>
                    <Hamburger state={state}/>
                </HeaderContent>
            </HeaderContainer>
        </HeaderWrapper>
    )
}

export default withRouter(Header)
