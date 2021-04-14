import React, {useRef, useEffect} from "react"
import {gsap} from "gsap"
import {Link, NavLink} from "react-router-dom"
import {
    staggerText,
    staggerReveal,
    fadeInUp,
    handleHover,
    handleHoverExit,
    handleCityReturn,
    handleCity,
    staggerRevealClose
} from "./Animation"

import dallas from "../images/dallas.webp"
import austin from "../images/austin.webp"
import newyork from "../images/newyork.webp"
import winter from "../images/winter.jpg"

import {
    Language,
    NavMenu, RedButton,
    //RedContainer,
    RedHamburgerMenu,
    RedMenuCityBackground,
    RedMenuLayer,
    RedMenuSecondaryBackgroundColor, RightMenu,
    RInfo,
    RLocations,
    RMenuLinks,
    RNav,
    RWrapper, Search
} from "./Hamburger.elements"
import styled from "styled-components";
import {TopLogo} from "../Preheader/Preheader";
import {MdLanguage, MdSearch} from "react-icons/md";


const RedContainer = styled.div`
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
`

const products = [
    {name: "КОРУНД-Классик", image: dallas, link: '/classic'},
    {name: "КОРУНД-Фасад", image: austin, link: '/facade'},
    {name: "КОРУНД-Антикор", image: newyork, link: '/anticorrsive'},
    {name: "КОРУНД-Зима", image: winter, link: '/winter'},
];

const Hamburger = ({state}) => {

    // Create varibles of our dom nodes
    let menuLayer = useRef(null);
    let reveal1 = useRef(null);
    let reveal2 = useRef(null);
    let cityBackground = useRef(null);
    let line1 = useRef(null);
    let line2 = useRef(null);
    let line3 = useRef(null);
    let line4 = useRef(null);
    let line5 = useRef(null);
    let line6 = useRef(null);
    let line7 = useRef(null);
    let info = useRef(null);

    useEffect(() => {
        // If the menu is open and we click the menu button to close it.
        if (state.clicked === false) {
            // If menu is closed and we want to open it.

            staggerRevealClose(reveal2, reveal1);
            // Set menu to display none
            gsap.to(menuLayer, {duration: 1, css: {display: "none"}});
        } else if (
            state.clicked === true ||
            (state.clicked === true && state.initial === null)
        ) {
            // Set menu to display block
            gsap.to(menuLayer, {duration: 0, css: {display: "block"}});
            //Allow menu to have height of 100%
            gsap.to([reveal1, reveal2], {
                duration: 0,
                opacity: 1,
                height: "100%"
            });
            staggerReveal(reveal1, reveal2);
            fadeInUp(info);
            staggerText(line1, line2, line3, line4, line5, line6, line7);
        }
    }, [state]);

    return (
        <RedHamburgerMenu ref={el => (menuLayer = el)}>
            <RedMenuSecondaryBackgroundColor
                ref={el => (reveal1 = el)}
            >
            </RedMenuSecondaryBackgroundColor>
            <RedMenuLayer ref={el => (reveal2 = el)}>
                <RedMenuCityBackground
                    ref={el => (cityBackground = el)}
                >
                </RedMenuCityBackground>
                <RedContainer>

                    <RWrapper>
                        <RMenuLinks>
                            <RNav>
                                <ul>
                                    <li>
                                        <NavLink
                                            onMouseEnter={e => handleHover(e)}
                                            onMouseOut={e => handleHoverExit(e)}
                                            ref={el => (line1 = el)}
                                            to='/'>
                                            Главная
                                        </NavLink>
                                    </li> <li>
                                        <Link
                                            onMouseEnter={e => handleHover(e)}
                                            onMouseOut={e => handleHoverExit(e)}
                                            ref={el => (line2 = el)}
                                            to='/production'>
                                            Продукция
                                        </Link>
                                    </li>
                                    <li>
                                        <NavLink
                                            onMouseEnter={e => handleHover(e)}
                                            onMouseOut={e => handleHoverExit(e)}
                                            ref={el => (line3 = el)}
                                            to='/documentation'>
                                            Документация
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            onMouseEnter={e => handleHover(e)}
                                            onMouseOut={e => handleHoverExit(e)}
                                            ref={el => (line4 = el)}
                                            to='/distribution'>
                                            Дистрибьюция
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            onMouseEnter={e => handleHover(e)}
                                            onMouseOut={e => handleHoverExit(e)}
                                            ref={el => (line5 = el)}
                                            to='/news'>
                                            Новости
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            onMouseEnter={e => handleHover(e)}
                                            onMouseOut={e => handleHoverExit(e)}
                                            ref={el => (line6 = el)}
                                            to='/contacts'>
                                            Контакты
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            onMouseEnter={e => handleHover(e)}
                                            onMouseOut={e => handleHoverExit(e)}
                                            ref={el => (line7 = el)}
                                            to='/account'>
                                            Account
                                        </NavLink>
                                    </li>
                                </ul>
                            </RNav>
                            <RInfo ref={el => (info = el)}>
                                <h3>Фабрика "Корунд"</h3>
                                <p>
                                    Продукт производится в России по оригинальной технологии
                                    из импортных материалов
                                </p><br/>
                                <p>
                                   Изготовлен в соответствии ТУ 437.8976.345
                                </p>
                            </RInfo>
                            <RLocations>
                                Продукты:
                                {/* Returning the list of cities */}
                                {products.map(el => (
                                    <span
                                        key={el.name}
                                        href={'el.link'}
                                        onMouseEnter={() => handleCity(el.image, cityBackground)}
                                        onMouseOut={() => handleCityReturn(cityBackground)}
                                    >
                                        {el.name}
                                    </span>
                                ))}
                            </RLocations>
                        </RMenuLinks>
                    </RWrapper>
                </RedContainer>
            </RedMenuLayer>
        </RedHamburgerMenu>
    )
}

export default Hamburger
