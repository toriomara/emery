import React, {useEffect, useRef, useState} from 'react'
import Main from '../layouts/Main'
import {NavLink} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {selectProduct} from '../features/productSlice'
import styled from 'styled-components'
import {ButtonPrimary} from '../components/Buttons/ButtonPrimary'
import {Power3, TweenLite, TweenMax} from 'gsap'

//import Preloader from '../components/preloader'
// https://github.com/wrongakram/GSAP-Hero-Animation/blob/master/src/App.js


const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
`

const Card = styled.div`
  position: relative;
  padding: 20px 40px 40px;
  text-align: center;
  overflow: hidden;
  border-radius: 20px;
  border: 1px solid #c3c3c3;
  z-index: 2;

  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #e2e2e2;
    clip-path: circle(150px at 80% 20%);
    transition: 0.5s ease-in-out;
  }

  &:hover:before {
    clip-path: circle(250px at 80% 20%);
  }
`

const Product = styled.div`
`

const Image = styled.img`
  position: relative;
  transition: 0.5s ease;

  :hover {
    transform: scale(1.2);
  }
`

const Text = styled.div`
  position: relative;
`

const Title = styled.h2`
  margin-top: 20px;
`

const Desc = styled.p`
  margin-top: 20px;
`

const Production = () => {

    const product = useSelector(selectProduct)

    let productItem = useRef(null)

    useEffect(() => {
        TweenMax.from(productItem, 2, {opacity: 0, y: 100, ease: Power3.easeOut})
    }, [product])

    return (
        <Main>
            <h1>PRODUCTION</h1>

            <Container>
                {product.map((l, id) => (
                    <Card key={id} ref={el => {
                        productItem = el
                    }}>
                        <Product>
                            <NavLink to={l.link}>
                                <Image src={l.image} alt={l.name}/>
                            </NavLink>
                            <Text>
                                <NavLink to={l.link}>
                                    <Title>{l.name}</Title>
                                </NavLink>
                                <Desc>{l.desc}</Desc>
                            </Text>
                        </Product>
                        <NavLink to={l.link}>
                            <ButtonPrimary margin='50px' name='Подробнее'>
                                {l.name}
                            </ButtonPrimary>
                        </NavLink>
                    </Card>
                ))}
            </Container>
        </Main>
    )
}

export default Production
