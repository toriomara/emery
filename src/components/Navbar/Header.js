import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import styled, {keyframes} from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  height: 50px;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 1;

  @media screen and (max-width: 960px) {
    display: none;
  }
`

const StyledMenu = styled.span`
  display: flex;
  position: relative;
  height: 50px;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  gap: 1rem;
  //border-top: 1px solid #d2d2d2;

  & a {
    text-decoration: none;
    color: black;
    padding: 1px 20px 5px 20px;
    border-radius: 20px;
    cursor: pointer;
  }

  & a.active {
    box-shadow: 0 1px 4px 0 rgb(5 5 5 / 25%);
    color: #e20001;
  }

  & a:hover {
    color: #e20001;
  }
`

export const Header = () => {
    return (
        <Wrapper>
            <StyledMenu>
                <NavLink exact to='/'>Главная</NavLink>
                <NavLink to='/production'>Продукция</NavLink>
                <NavLink to='/documentation'>Документация</NavLink>
                <NavLink to='/distribution'>Дистрибьюция</NavLink>
                <NavLink to='/news'>Новости</NavLink>
                <NavLink to='/contacts'>Контакты</NavLink>
                <NavLink to='/account'>Войти</NavLink>
                <Link to='/account'>Выйти</Link>
            </StyledMenu>
        </Wrapper>
    )
}

