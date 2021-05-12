import React, {useRef, useEffect, useState} from 'react'
import Main from '../layouts/Main'
import styled from 'styled-components'
import {VscArrowRight} from 'react-icons/all'
import korundClassic from '../img/products/korundClassic.jpg'
import front from '../img/products/front.jpg'
import {TweenMax, Power3} from 'gsap'
import gsap from 'gsap'


const Product = styled.div`
  height: 100vh;
  visibility: hidden;
`

const Container = styled.div`
  width: 1440px;
  min-width: 1440px;
  margin: 0 auto;
`

const ProductInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 24px;
  height: 100vh;
`

const ProductImages = styled.div`
  position: relative;
  width: 50%;
  height: 100vh;
`

const ProductImagesInner = styled.div`
`

const ProductImage = styled.div`
  position: absolute;
  overflow: hidden;

  img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
  }
`

const ProductImageClassic = styled(ProductImage)`
  top: 0;
  right: 0;
  width: 45%;
  height: 50%;
  ${ProductImage}
`

const ProductImageNeo = styled(ProductImage)`
  bottom: 24px;
  left: 0;
  width: 52%;
  height: 65%;
  ${ProductImage}
`

const ProductContent = styled.div`
  width: 50%;
`

const ProductContentInner = styled.div`
  width: 400px;
  margin: 0 auto;
  color: #323232;
`

const Subtitle = styled.h2`
  font-weight: 500;
  font-size: 32px;
  margin-bottom: 24px;
`

const HeroContentLine = styled.div`
  margin: 0;
  height: 44px;
  overflow: hidden;
`

const HeroContentLineInner = styled.div`
`

const Desc = styled.p`
  font-size: 16px;
  line-height: 24px;
  font-weight: 300;
  margin-right: 48px;
  margin-bottom: 56px;
`

const ButtonRow = styled.div`
  position: relative;

  &:before {
    position: absolute;
    content: '';
    width: 56px;
    height: 1px;
    background: #dfdfdf;
    top: 50%;
    left: -68px;
  }
`

const Explore = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  background: none;
  border: none;
  font-size: 12px;
  padding: 0;
  //cursor: pointer;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: .7px;

  &:focus {
    outline: none
  }
`

const Icon = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background: red;
  height: 42px;
  width: 42px;
  border-radius: 100%;
  left: 130%;
`

const Classic = () => {

    let classic = useRef(null)
    let images = useRef(null)
    let content = useRef(null)
    const [tl] = useState(gsap.timeline({ delay: 0.8 }))

    useEffect(() => {
        // IMAGES VARS
        const classicImage = images.firstElementChild
        const neoImage = images.lastElementChild

        // CONTENT VARS
        const headlineFirst = content.children[0].children[0];
        const headlineSecond = headlineFirst.nextSibling
        const headlineThird = headlineSecond.nextSibling
        const contentDesc = content.children[1]
        const contentButton = content.children[2]

        // REMOVE INITIAL FLASH
        TweenMax.to(classic, 0, {css: {visibility: 'visible'}})

        // IMAGES ANIMATION
        tl.from(classicImage, 1.2, {y: 1280, ease: Power3.easeOut}, 'Start')
            .from(classicImage.firstElementChild, 2, {scale: 1.6, ease: Power3.easeOut}, .2)
            .from(neoImage, 1.2, {y: 1280, ease: Power3.easeOut}, .2)
            .from(neoImage.lastElementChild, 2, {scale: 1.6, ease: Power3.easeOut}, .2)

        // CONTENT ANIMATION
        tl.staggerFrom([headlineFirst.children, headlineSecond.children, headlineThird.children], 1, {
            y: 44,
            ease: Power3.easeOut,
            delay: .8
        }, .15, 'Start')
            .from(contentDesc, 1, {y: 20, opacity: 0, ease: Power3.easeOut}, 1.4)
            .from(contentButton, 1, {y: 20, opacity: 0, ease: Power3.easeOut}, 1.6)
    }, [tl])

    return (
        <Main>
            <h1>Classic</h1>
            <Product ref={el => classic = el}>
                <Container>
                    <ProductInner>
                        <ProductImages>
                            <ProductImagesInner ref={el => images = el}>
                                <ProductImageClassic>
                                    <img src={korundClassic} alt="КОРУНД-Классик"/>
                                </ProductImageClassic>
                                <ProductImageNeo>
                                    <img src={front} alt="КОРУНД-Фасад"/>
                                </ProductImageNeo>
                            </ProductImagesInner>
                        </ProductImages>
                        <ProductContent>
                            <ProductContentInner ref={el => content = el}>
                                <Subtitle>
                                    <HeroContentLine>
                                        <HeroContentLineInner>
                                            Relieving the burden
                                        </HeroContentLineInner>
                                    </HeroContentLine>
                                    <HeroContentLine>
                                        <HeroContentLineInner>
                                            of disease caused
                                        </HeroContentLineInner>
                                    </HeroContentLine>
                                    <HeroContentLine>
                                        <HeroContentLineInner>
                                            by behavior.
                                        </HeroContentLineInner>
                                    </HeroContentLine>
                                </Subtitle>
                                <Desc>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, alias amet
                                    dicta dolores fuga iusto modi nulla quis, ratione reiciendis tempore temporibus
                                    totam velit voluptatem.
                                </Desc>
                                <ButtonRow>
                                    <Explore>
                                        explore
                                        <Icon>
                                            <VscArrowRight/>
                                        </Icon>
                                    </Explore>
                                </ButtonRow>
                            </ProductContentInner>
                        </ProductContent>
                    </ProductInner>
                </Container>
            </Product>
        </Main>
    )
}

export default Classic
