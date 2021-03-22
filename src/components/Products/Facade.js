import React, {useState} from 'react'
import styled from 'styled-components'
import {Preheader} from "../Preheader/Preheader";
import {Wrapper} from "../globalStyles";
import {Menu} from "../Menu/Menu";
import {Header} from "../Header/Header";

const Facade = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <div>
            <Preheader isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
            {isMenuOpen && <Menu/>}
            <Header/>
            <Wrapper>
                <h1>Facade</h1>
            </Wrapper>
        </div>
    )
}

export default Facade