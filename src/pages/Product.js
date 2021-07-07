import React from 'react'
import Main from '../layouts/Main'
import styled from 'styled-components'
import {withRouter} from 'react-router-dom'
import {useSelector} from "react-redux";
import {selectProduct} from "../features/productSlice";

const ProductList = styled.section`
`

const Product = ({history}) => {

    const product = useSelector(selectProduct)


    return (
        <Main>
            <ProductList
                onItemSelected={(itemId) => {
                    history.push(`/production/${itemId}`)
                }}>
            </ProductList>
        </Main>
    )
}

export default withRouter(Product)
