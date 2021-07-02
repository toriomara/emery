import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {ButtonPrimary} from '../Buttons/ButtonPrimary'
import {ButtonSecondary} from '../Buttons/ButtonSecondary'
import {useDispatch} from 'react-redux'
import {Info, LoginForm, Name, Password, LoginDivider} from '../Login/Login'
import {auth} from '../firebase'
import {login} from '../../features/userSlice'
import {LoginWrapper} from '../Login/Login'

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [fName, setFName] = useState('')
    const [lName, setLName] = useState('')
    const dispatch = useDispatch()
    const history = useHistory()

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
                    <Name>
                        <label htmlFor="fName">First Name</label>
                        <input
                            id='fName'
                            type='text'
                            value={fName}
                            onChange={(e) => setFName(e.target.value)}
                        />

                        <label htmlFor='lName'>Last Name</label>
                        <input
                            id='lName'
                            type='text'
                            value={lName}
                            onChange={(e) => setLName(e.target.value)}
                        />

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
                    <ButtonPrimary name='Create Account' type='submit' onClick={signUp}/>
                </LoginForm>
                <LoginDivider>
                    <hr/>
                    <span>OR</span>
                    <hr/>
                </LoginDivider>
                <Link to='/login'>
                    <ButtonSecondary name='sign in'>Sign In</ButtonSecondary>
                </Link> </Info>
        </LoginWrapper>
    )
}

export default Signup
