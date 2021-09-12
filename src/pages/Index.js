import React from 'react'
import Main from '../layouts/Main'
import styled from 'styled-components'
import {LightButton} from '../components/Buttons/MainButton'
import Clock from '../components/currentTime'

const Header = styled.h1`
  font-size: 25px;
  color: var(--dark);
`

const Colors = styled.section`
  margin: 50px 0 50px;
  position: relative;
  display: grid;
  width: 100%;
  height: 50vh;
  grid-template-columns: repeat(6, 1fr);
`

const Light = styled.div`
  display: grid;
  background-color: var(--light)
`

const Grey = styled.div`
  display: grid;
  background-color: var(--grey)
`

const DarkGrey = styled.div`
  display: grid;
  background-color: var(--darkgrey)
`
const Red = styled.div`
  display: grid;
  background-color: var(--red)
`

const DeepRed = styled.div`
  display: grid;
  background-color: var(--deepred)
`

const Dark = styled.div`
  display: grid;
  background-color: var(--dark)
`

const Index = () => {

    return (
        <Main>
            <Header
            >САМЫЙ ГЛАВНАЯ СТРАНИЦА!</Header>
            <h1><Clock/></h1>
            <Colors>
                <Light/>
                <Grey/>
                <DarkGrey/>
                <Red/>
                <DeepRed/>
                <Dark/>
            </Colors>
        </Main>
    )
}

export default Index
