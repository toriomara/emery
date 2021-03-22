import React, {useState} from 'react'
import styled from 'styled-components'
import {Preheader} from "../Preheader/Preheader";
import {Menu} from "../Menu/Menu";
import {Header} from "../Header/Header";

const Documentation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isSearchOpen, setIsSearchOpen] = useState(false)

    return (
        <div>
            <Preheader
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
                isSearchOpen={isSearchOpen}
                setIsSearchOpen={setIsSearchOpen}
            />
            {isMenuOpen && <Menu/>}
            <Header/>
            <h1>Documentation</h1>
        </div>
    );
};

export default Documentation;