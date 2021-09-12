import React, { useState } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
//import {MdLanguage} from 'react-icons/md'
//import {PreheaderContainer, TopLogo} from '../Preheader/Preheader'
import { auth } from '../firebase'
import { useDispatch } from 'react-redux'
import { login } from '../../features/userSlice'
import { PrimaryButton } from '../Buttons/MainButton'
import { Input } from '../Template/Footer/Input'


export const LoginWrapper = styled.section`
  display: grid;
  position: relative;
  //align-items: center;
 // padding: 4px 44px;
`

// Доделать тень при наведении
export const LoginLanguage = styled.div`
  display: flex;
  gap: 6px;
  align-items: flex-end;
  cursor: pointer;
  //padding: 0 6px 0 6px;
  border-radius: 3rem;
  font-size: 1rem;
  transition: all 0.2s;

  &:hover {
    background-color: hsla(0, 0%, 50.2%, 0.125);
  }

  & span {
    font-weight: 500;
  }
`

export const Info = styled.div`
  display: flex;
  margin-top: 100px;
  flex-direction: column;
  gap: 1.2rem;
  min-width: 330px;
  margin-left: auto;
  margin-right: auto;

  & h1 {
    font-weight: 500;
    font-size: 2.5rem;
  }
`

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
`

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 30px 0;

  label {
    color: #5c5e62;
    font-weight: 500;
    font-size: 1rem;
    padding-left: 1.25rem;
    padding-bottom: 0.2rem;
  }
`

export const LoginDivider = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  & hr {
    align-self: center;
    width: 40%;
    height: 0;
    opacity: 0.3;
  }

  & span {
    font-weight: 500;
    color: #5c5e62;
  }
`

const Login = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const dispatch = useDispatch()
	const history = useHistory()

	function handleClick () {
		history.push('/signup')
	}

	const signIn = (e) => {
		e.preventDefault()

		auth.signInWithEmailAndPassword(email, password)
			.then((userAuth) => {
				dispatch(login({
						email: userAuth.user.email,
						uid: userAuth.user.uid,
						displayName: userAuth.user.displayName
					})
				)
				history.push('/')
			}).catch((error) => alert(error.message))
	}

	return (
		<LoginWrapper>
			<Info>
				<h1>Sign In</h1>
				<LoginForm>
					<InputGroup>
						<label htmlFor="email">Email Address</label>
						<Input
							id='email'
							type='email'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</InputGroup>
					<InputGroup>
						<label htmlFor="password">Password</label>
						<Input
							id='password'
							type='password'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</InputGroup>
					<PrimaryButton
						name='Sign In'
						type='submit'
						onClick={signIn}
						margin='20px 0 10px'
					/>
				</LoginForm>
				<LoginDivider>
					<hr/>
					<span>OR</span>
					<hr/>
				</LoginDivider>
				<PrimaryButton
					onClick={handleClick}
					name='Create Account'
					margin='10px 0 10px'
				/>
			</Info>
		</LoginWrapper>
	)
}

export default Login
