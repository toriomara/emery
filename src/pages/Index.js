import React, {useEffect, useRef} from 'react'
import Main from '../layouts/Main'
import styled from 'styled-components'
import gsap from 'gsap'

const Header = styled.h1`
  font-size: 25px;`

const Index = () => {
    let mainHeader = useRef(null)
    useEffect(() => {
        gsap.to('Header', {duration: 1, x: 200})
    })

    return (
        <Main>
            <Header
                ref={el => {mainHeader = el}}
            >САМЫЙ ГЛАВНЫЙ СТРАНИЦ!</Header>
        </Main>
    )
}

export default Index
