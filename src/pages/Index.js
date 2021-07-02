import React from 'react'
import Main from '../layouts/Main'
import styled from 'styled-components'
import Clock from '../components/currentTime'

const Header = styled.h1`
  font-size: 25px;
  color: brown;
`

const Index = () => {
    return (
        <Main>
            <Header
            >САМЫЙ ГЛАВНЫЙ СТРАНИЦ!</Header>
            <h1><Clock/></h1>
        </Main>
    )
}

export default Index
