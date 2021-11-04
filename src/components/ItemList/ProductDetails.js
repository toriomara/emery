import React from 'react'
import Main from '../../layouts/Main'
import {useSelector} from 'react-redux'
//import {products, selectProduct} from '../../features/productSlice'
import { useTranslation } from 'react-i18next'

const ProductDetails = ({ productName }) => {
  const product = useSelector((state) => state.product.products.find(p => p.nameEn === productName))
  /*const product = useSelector(selectProduct)*/

  const {t} = useTranslation()

  return (
        <Main>
            <h1>Hello</h1>
            {t('product.name')}
            <br/>
            {product.desc}
        </Main>
    )
}

export default ProductDetails

