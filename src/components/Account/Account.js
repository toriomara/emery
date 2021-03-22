import React, {useState} from 'react'
import styled from 'styled-components'
import {Link, NavLink, useHistory} from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
import {logout, selectUser} from '../../features/userSlice'
import {useDispatch, useSelector} from 'react-redux'
import Car from '../Car/Car'
import {auth} from '../firebase'
import {Preheader} from "../Preheader/Preheader"
import {Header} from '../Header/Header'
import {Menu} from "../Menu/Menu";

const StyledAccount = styled.section`
`

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 140px 40px;
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
        //const show = () => setIsMenuOpen(!isMenuOpen)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

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
        <StyledAccount>
            <Preheader isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
            {isMenuOpen && <Menu/>}
            <Header/>
            <Info>
                <Person>
                    <h4>{user?.displayName + "'s Tesla"}</h4>
                </Person>
                <InnerMenu>
                    <Link>Home</Link>
                    <Link>Account</Link>
                    <Link>History</Link>
                    <Link onClick={logoutOfApp}>Sign out</Link>
                </InnerMenu>
            </Info>
            <Car
                imgSrc="https://www.tesla.com/tesla_theme/assets/img/mytesla/v3/header-nocar-models@2x.jpg?20170815"
                model='model s'
                testDrive
            />
            <Car
                imgSrc='https://www.tesla.com/tesla_theme/assets/img/mytesla/v3/header-nocar-modelx@2x.jpg?20170815'
                model='model x'
            />
        </StyledAccount>
    )
}

export default Account