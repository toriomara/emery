import React, {useState} from 'react'
import styled from 'styled-components'
import {Preheader} from "../Preheader/Preheader";
import {Menu} from "../Menu/Menu";
import {Header} from "../Header/Header";
import {Container, Wrapper} from "../globalStyles";

const Anticorrosive = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <div>
            <Preheader isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
            {isMenuOpen && <Menu/>}
            <Header/>
            <Container>
                <h1>Anticorrosive</h1>
            </Container>
        </div>
    )
}

export default Anticorrosive