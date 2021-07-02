import React, {useRef, useEffect} from 'react'
import {gsap} from 'gsap'
import {NavLink} from 'react-router-dom'
import {products} from '../../../data/products'
import styled from 'styled-components'
import {
    staggerText,
    staggerReveal,
    handleHover,
    handleHoverExit,
    handleCityReturn,
    handleCity,
    staggerRevealClose
} from "./Animation"

import {
    RedHamburgerMenu,
    RedMenuCityBackground,
    RedMenuLayer,
    RedMenuSecondaryBackgroundColor,
    RInfo,
    RLocations,
    RMenuLinks,
    RNav,
    RWrapper
} from './Hamburger.elements'

const RedContainer = styled.div`
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
`

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
                                    </li>
                                    <li>
                                        <NavLink
                                            onMouseEnter={e => handleHover(e)}
                                            onMouseOut={e => handleHoverExit(e)}
                                            ref={el => (line2 = el)}
                                            to='/production'>
                                            Продукция
                                        </NavLink>
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
                                    <NavLink to={el.link} key={el.name}>
                                        <span
                                            onMouseEnter={() => handleCity(el.imageBG, cityBackground)}
                                            onMouseOut={() => handleCityReturn(cityBackground)}
                                        >
                                            {el.name}
                                        </span>
                                    </NavLink>
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
