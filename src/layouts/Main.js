import React from 'react'
import PropTypes from 'prop-types'
import Footer from '../components/Template/Footer/Footer'
import Header from '../components/Template/Header/Header'
import styled from 'styled-components'

import { useHistory } from 'react-router-dom'
import {ButtonPrimary} from '../components/Buttons/ButtonPrimary'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh
`

const Main = ({children}) => {

    const history = useHistory()

    function handleClick() {
        history.push('/')
    }

    return (
        <Wrapper>
            <Header/>
            <ButtonPrimary margin='0px' name='Главная' onClick={handleClick}/>
            <div id="main">
                {children}
            </div>
            {/*{props.fullPage ? null : <SideBar/>}*/}
            <Footer/>
        </Wrapper>
    )
}

Main.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
    fullPage: PropTypes.bool,
    title: PropTypes.string,
    description: PropTypes.string,
}

Main.defaultProps = {
    children: null,
    fullPage: false,
    title: null,
    description: "Korund",
}

export default Main
