import React, {useEffect, useRef, useState} from 'react'
import Main from '../layouts/Main'
import {NavLink} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {selectProduct} from '../features/productSlice'
import styled from 'styled-components'
import {ButtonPrimary} from '../components/Buttons/ButtonPrimary'
import {Power3, TweenLite, TweenMax} from 'gsap'

const Card = () => {

    const product = useSelector(selectProduct)

    return (
        <div>

        </div>
    )
}

export default Card
