import React from 'react'
import Main from '../../layouts/Main'
import {useSelector} from 'react-redux'
import {useRouteMatch} from 'react-router-dom'
import {products, selectProduct} from '../../features/productSlice'


const DocumentationDetails = () => {
    const match = useRouteMatch();
    const product = useSelector((state) => state.product.products)
    /*const product = useSelector(selectProduct)*/

    const item = product.map((l, id) => (
        <h2 key={id}>{l.name}</h2>
    ))

    return (
        <Main>
            <h1>Hello</h1>
            {item}
        </Main>
    );
};

export default DocumentationDetails