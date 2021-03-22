import React, {useState} from 'react'
//import styled from 'styled-components'
import {Preheader} from "../Preheader/Preheader"
import {Menu} from "../Menu/Menu"
import {Header} from "../Header/Header"
import {Wrapper} from "../globalStyles"

const Winter = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <div>
            <Preheader isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
            {isMenuOpen && <Menu/>}
            <Header/>
            <Wrapper>
                <h1>Winter</h1>
            </Wrapper>
        </div>
    )
}

export default Winter