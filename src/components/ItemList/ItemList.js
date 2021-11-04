import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { Power3, TweenLite, TweenMax } from 'gsap'
import { selectProduct } from '../../features/productSlice'
import { PrimaryButton } from '../Buttons/MainButton'
import { useTranslation } from 'react-i18next'

//import Preloader from '../components/preloader'
// https://github.com/wrongakram/GSAP-Hero-Animation/blob/master/src/App.js

const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  margin: 50px 0;
`

const Card = styled.div`
  position: relative;
  padding: 20px 40px 40px;
  text-align: center;
  overflow: hidden;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);


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
  
  &:hover {
    box-shadow: 0 15px 20px rgba(57,56,56,0.5);
    transition: all 0.5s ease 0s;
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
  a {
    color: var(--dark);
  }
`

const Title = styled.h2`
  margin-top: 20px;
  
`

const Desc = styled.p`
  margin-top: 20px;
`

const ProductCard = ({ product }) => {

	let productItem = useRef(null)

	const { t } = useTranslation()

	useEffect(() => {
		TweenMax.from(productItem, 2, { opacity: 0, y: 100, ease: Power3.easeOut })
	}, [product])

	return (
		<Card ref={el => {
			productItem = el
		}}>
			<Product>
				<Link to={product.link}>
					<Image src={product.image} alt={product.name}/>
				</Link>
				<Text>
					<Link to={`/production/${product.nameEn}`}>
						<Title>{product.name}</Title>
					</Link>
					<Desc>{product.desc}</Desc>
				</Text>
			</Product>
			<PrimaryButton
				name={product.name}
				margin='30px 0 15px'
			/>
			<p>{t('products.name')}</p>
		</Card>
	)
}

const ItemList = () => {

	const product = useSelector(selectProduct)

	const items = product.map((l, id) => (
		<ProductCard product={l} key={l.nameEn}/>
	))

	return (
		<Container>
			{items}
		</Container>
	)
}

export default ItemList
