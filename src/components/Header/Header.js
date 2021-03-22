import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.section`
  display: grid;
  position: relative;
  align-items: center;
  margin: 0 auto;
  padding: 4px 24px 4px 24px;
`

const StyledMenu = styled.span`
  display: flex;
  height: 50px;
  align-items: center;
  justify-content: center;
  font-size: 17px;
  gap: 1rem;
  border-top: 1px solid #d2d2d2;

  & a {
    text-decoration: none;
    color: black;
    padding: 1px 20px 5px 20px;
    border-radius: 20px;
    cursor: pointer;
  }
  
  & a.active {
    box-shadow: 0 1px 4px 0 rgb(5 5 5 / 25%);
    color: red;
  }

  & a:hover {
    color: red;
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

