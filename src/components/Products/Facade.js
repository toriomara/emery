import React from 'react'
import {ContentContainer} from "../globalStyles"
import Navbar from "../Navbar/Navbar"

const Facade = () => {
    return (
        <div>
            <Navbar/>
            <ContentContainer>
                <h1>Facade</h1>
            </ContentContainer>
        </div>
    )
}

export default Facade