import React, {useState} from 'react';
import {Menu} from "../Menu/Menu";
//import {Header} from './Header'
import {PreHeader} from "./PreHeader";

import Header from '../NewHeader/Header'

const Navbar = () => {
    //const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <div>
           {/* <PreHeader isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
            {isMenuOpen && <Menu/>}
            <Header/>*/}
            <Header/>
        </div>
    )
}

export default Navbar
