import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {Info, LoginForm, Name, InputGroup, Password, LoginDivider} from '../Login/Login'
import {auth} from '../firebase'
import {login} from '../../features/userSlice'
import {LoginWrapper} from '../Login/Login'
import {PrimaryButton, SecondaryButton} from '../Buttons/MainButton'
import { Input } from '../Template/Footer/Input'


const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [fName, setFName] = useState('')
    const [lName, setLName] = useState('')
    const dispatch = useDispatch()

    const history = useHistory()

    function handleClick() {
        history.push('/login')
    }

    const signUp = (e) => {
        e.preventDefault()
        if (!fName) {
            return alert('Please enter a first name')
        }
        if (!lName) {
            return alert('Please enter a last name')
        }
        auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: fName
            }).then(() => {
                dispatch(
                    login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: fName,
                    })
                )
                history.push('/account')
            })
        }).catch((error) => alert(error.message))
    }

    return (
        <LoginWrapper>
            <Info>
                <h1>Create Account</h1>
                <LoginForm>
                    <InputGroup>
                        <label htmlFor="fName">First Name</label>
                        <Input
                            id='fName'
                            type='text'
                            value={fName}
                            onChange={(e) => setFName(e.target.value)}
                        />

                        <label htmlFor='lName'>Last Name</label>
                        <Input
                            id='lName'
                            type='text'
                            value={lName}
                            onChange={(e) => setLName(e.target.value)}
                        />
                    </InputGroup>
                    <InputGroup>

                        <label htmlFor="email">Email Address</label>
                        <Input
                            id='email'
                            type='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label htmlFor="password">Password</label>
                        <Input
                            id='password'
                            type='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </InputGroup>
                    <PrimaryButton
                        name='Create Account'
                        type='submit'
                        margin='20px 0 10px'
                        onClick={signUp}/>
                </LoginForm>
                <LoginDivider>
                    <hr/>
                    <span>OR</span>
                    <hr/>
                </LoginDivider>
                    <PrimaryButton
                        name='Sign in'
                        margin='10px 0 10px'
                        onClick={handleClick}
                    />
                </Info>
        </LoginWrapper>
    )
}

export default Signup
