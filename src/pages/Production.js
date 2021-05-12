import React from 'react'
import Main from '../layouts/Main'
import {products} from '../redux/data/products'
import {NavLink} from 'react-router-dom'

const Production = () => {
    return (
        <Main>
            <h1>PRODUCTION</h1>
            <ul>
                Продукты:
                {products.map(el => (
                    <NavLink to={el.link}>
                        <li
                            key={el.name}
                        >
                            {el.name}
                        </li>
                    </NavLink>
                ))}
            </ul>
        </Main>
    )
}

export default Production
