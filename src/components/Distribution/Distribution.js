import React, {useState} from 'react'
import styled from 'styled-components'
import {Preheader} from "../Preheader/Preheader"
import {Menu} from "../Menu/Menu"
import {Header} from "../Header/Header"

const Distribution = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <div>
            <Preheader isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
            {isMenuOpen && <Menu/>}
            <Header/>
            <h1>Distribution</h1>
        </div>
    )
}

export default Distribution