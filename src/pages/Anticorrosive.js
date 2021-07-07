import React, {useRef, useEffect, useState} from 'react'
import Main from '../layouts/Main'
import img from '../img/logo512.png'
import {TweenMax, Power3} from 'gsap'
import styled from 'styled-components'
import {useSelector} from "react-redux";
import {selectRoutes} from "../features/routeSlice";

const Title = styled.h1`
  display: flex;
  justify-content: center;
  opacity: 1;
`

const CircleContainer = styled.div`
  padding: 50px 0;
  margin: 50px 0;
  visibility: hidden;
`

const Circle = styled.div`
  margin: 30px auto;
  width: 75px;
  height: 75px;
  border-radius: 100%;
`

const CircleYellow = styled(Circle)`
  background-color: #fdcf51;
  ${Circle}
`

const CircleRed = styled(Circle)`
  background-color: #fd5151;
  ${Circle}
`

const CircleBlue = styled(Circle)`
  background-color: #51a0fd;
  ${Circle}
`

const Anticorrosive = () => {

    let logoItem = useRef(null)
    let textItem = useRef(null)
    let circleContainer = useRef(null)

    let circleYellow = useRef(null)
    let circleRed = useRef(null)
    let circleBlue = useRef(null)

    const [state, setState] = useState(false)

    const handleExpand = () => {
        TweenMax.to(circleRed, .8, {width: 200, height: 200, ease: Power3.easeOut})
        setState(true)
    }

    const handleShrink = () => {
        TweenMax.to(circleRed, .8, {width: 75, height: 75, ease: Power3.easeOut})
        setState(false)
    }

    useEffect(() => {
        TweenMax.from(logoItem,1,{opacity: 0, y: 100, ease: Power3.easeOut, delay: .1})
        TweenMax.from(textItem,.8,{opacity: 0, y: 100, ease: Power3.easeOut})
        TweenMax.to(circleContainer,0,{css: {visibility: 'visible'}})
        TweenMax.staggerFrom([circleYellow, circleRed, circleBlue], .8, {opacity: 0, x: 100, ease: Power3.easeOut}, .2 )
    }, [])

    return (
        <Main>
            <Title ref={el => {
                textItem = el
            }}>Anticorrosive</Title>
            <img ref={el => {
                logoItem = el
            }} src={img}/>
            <CircleContainer ref={el => {circleContainer = el}}>
                <CircleYellow ref={el => {circleYellow = el}}></CircleYellow>
                <CircleRed
                    onClick={state !== true ? handleExpand : handleShrink}
                    ref={el => {circleRed = el}}
                ></CircleRed>
                <CircleBlue ref={el => {circleBlue = el}}></CircleBlue>
            </CircleContainer>
        </Main>
    )
}

export default Anticorrosive
