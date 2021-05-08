import React from 'react';
import PropTypes from 'prop-types';
import Footer from "../components/Template/Footer/Footer";
import Header from "../components/Template/Header/Header";
import NewFooter from "../components/Template/Footer/Footer"
import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh
`

const Main = (props) => (
    <Wrapper>
        <Header/>
        <div id="main">
            {props.children}
        </div>
        {/*{props.fullPage ? null : <SideBar/>}*/}
        <Footer/>
    </Wrapper>
)

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
