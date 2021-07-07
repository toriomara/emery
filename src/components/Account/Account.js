import React, {useState} from 'react'
import styled from 'styled-components'
import {Link, useHistory} from 'react-router-dom'
import {logout, selectUser} from '../../features/userSlice'
import {useDispatch, useSelector} from 'react-redux'
//import Car from '../Car/Car'
import {auth} from '../firebase'
import {ContentContainer} from '../globalStyles'
import Main from '../../layouts/Main'

const Info = styled(ContentContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;

  ${ContentContainer}
`

const Person = styled.div`
  & h4 {
    font-weight: 500;
    text-transform: capitalize;
    font-size: x-large;
  }
`

const InnerMenu = styled.div`
  display: flex;
  gap: 20px;

  & a {
    text-decoration: none;
    color: #393c41;
    font-size: 1rem;
    transition: all 0.2s;
    text-transform: capitalize;

    &:hover {
      color: black;
      font-weight: 500;
      transition: all 0.2s;
    }
  }
`

const Account = (/*{isMenuOpen, setIsMenuOpen}*/) => {
    const user = useSelector(selectUser)
    const dispatch = useDispatch()
    const history = useHistory()

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
        <Main>
            <Info>
                <Person>
                    <h4>{user?.displayName + "'s Tesla"}</h4>
                </Person>
                <InnerMenu>
                    <Link to='/'>Home</Link>
                    <Link to='/'>Account</Link>
                    <Link to='/'>History</Link>
                    <Link to='/' onClick={logoutOfApp}>Sign out</Link>
                </InnerMenu>
            </Info>
            CAR
        </Main>
    )
}

export default Account
