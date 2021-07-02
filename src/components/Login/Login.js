import React, {useState} from 'react'
import styled from 'styled-components'
import {Link, useHistory} from 'react-router-dom'
//import {MdLanguage} from 'react-icons/md'
//import {PreheaderContainer, TopLogo} from '../Preheader/Preheader'
import {ButtonPrimary} from '../Buttons/ButtonPrimary'
import {ButtonSecondary} from '../Buttons/ButtonSecondary'
import {auth} from '../firebase'
import {useDispatch} from 'react-redux'
import {login} from '../../features/userSlice'

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

export const Name = styled.div`
  display: flex;
  flex-direction: column;

  & label {
    color: #5c5e62;
    font-weight: 500;
    font-size: 1rem;
    padding-left: 1.25rem;
    padding-bottom: 0.2rem;
  }

  & input {
    margin-bottom: 2rem;
    background-color: #f4f4f4;
    border: 1px solid #f4f4f4;
    outline: none;
    border-radius: 3rem;
    padding: 0.6rem 1.25rem;
    color: #393c41;
    font-weight: 600;

    &:focus {
      border: 1px solid #d6d6d6;
      transition: all .2s;
    }
  }
`

export const Password = styled.div`
  display: flex;
  flex-direction: column;

  & label {
    color: #5c5e62;
    font-weight: 500;
    font-size: 1rem;
    padding-left: 1.25rem;
    padding-bottom: 0.2rem;
  }

  & input {
    margin-bottom: 2rem;
    background-color: #f4f4f4;
    border: 1px solid #f4f4f4;
    outline: none;
    border-radius: 3rem;
    padding: 0.6rem 1.25rem;
    color: #393c41;
    font-weight: 600;

    &:focus {
      border: 1px solid #d6d6d6;
      transition: all .2s;
    }
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
                    <Name>
                        <label htmlFor="email">Email Address</label>
                        <input
                            id='email'
                            type='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Name>
                    <Password>
                        <label htmlFor="password">Password</label>
                        <input
                            id='password'
                            type='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Password>
                    <ButtonPrimary name='Sign In' type='submit' onClick={signIn}>Sign In</ButtonPrimary>
                </LoginForm>
                <LoginDivider>
                    <hr/>
                    <span>OR</span>
                    <hr/>
                </LoginDivider>
                <Link to='/signup'>
                    <ButtonSecondary name='Create Account'>Sign In</ButtonSecondary>
                </Link>
            </Info>
        </LoginWrapper>
    )
}

export default Login
