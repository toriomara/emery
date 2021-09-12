import React from 'react'
import PropTypes from 'prop-types'
import Footer from '../components/Template/Footer/Footer'
import Header from '../components/Template/Header/Header'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { PrimaryButton, SecondaryButton } from '../components/Buttons/MainButton'
import { auth } from '../components/firebase'
import { logout } from '../features/userSlice'
import { useDispatch } from 'react-redux'

const Wrapper = styled.div`
  display: grid;
  width: 100%;
  margin: 0;
  flex-direction: column;
  min-height: 100vh
`

const ButtonBlock = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  flex-direction: column;
`

const Main = ({ children }) => {
	const dispatch = useDispatch()
	const history = useHistory()

	function handleClick () {
		history.push('/')
	}

	function account () {
		history.push('/account')
	}

	const logoutOfApp = () => {
		auth
			.signOut()
			.then(() => {
				dispatch(logout())
				history.push('/')
			})
			.catch((error) => alert(error.message))
	}

	return (
		<Wrapper>
			<Header/>
			<ButtonBlock>
				{/*    <LightButton margin='10px 10px 10px 0' name='Главная' onClick={handleClick}/>
                <DarkButton margin='10px 10px 10px 0' name='Выход' onClick={logoutOfApp}/>
                <DarkButton margin='10px 10px 10px 0' name='Аккаунт' onClick={account}/>*/}

				<SecondaryButton name='Главная' onClick={handleClick}/>
				<PrimaryButton name='Выход' onClick={logoutOfApp}/>
				<PrimaryButton name='Аккаунт' onClick={account}/>
			</ButtonBlock>
			<div id='main'>
				{children}
			</div>
			{/*{props.fullPage ? null : <SideBar/>}*/}
			<Footer/>
		</Wrapper>
	)
}

Main.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]),
	fullPage: PropTypes.bool,
	title: PropTypes.string,
	description: PropTypes.string,
}

Main.defaultProps = {
	children: null,
	fullPage: false,
	title: null,
	description: 'Korund',
}

export default Main
