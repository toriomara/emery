import React from 'react'
import Main from '../layouts/Main'
import {NavLink} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {selectProduct} from '../features/productSlice'
//import Preloader from '../components/preloader'

const Production = () => {

    const product = useSelector(selectProduct)

    return (
        <Main>
            <h1>PRODUCTION</h1>
            <ul>
                {product.filter((l) => !l.index).map((l) => (
                    <li key={l.name}>
                        <NavLink to={l.link}>{l.name}</NavLink>
                        <p>{l.desc}</p>
                        <img src={l.image}/>
                    </li>
                ))}
            </ul>
        </Main>
    )
}

export default Production
