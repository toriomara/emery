import React, {useEffect} from 'react'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import HeaderBlock from './components/HeaderBlock/HeaderBlock'
import Login from './components/Login/Login'
import {useDispatch, useSelector} from 'react-redux'
import {login, logout, selectUser} from './features/userSlice'
import Signup from './components/Signup/Signup'
import Account from './components/Account/Account'
import {auth} from './components/firebase'
import Production from "./components/Production/Production";
import Documentation from "./components/Documentation/Documentation";
import Distribution from "./components/Distribution/Distribution";
import Contacts from "./components/Contacts/Contacts";
import News from "./components/News/News";
import Classic from "./components/Products/Classic";
import Anticorrosive from "./components/Products/Anticorrosive";
import Facade from "./components/Products/Facade";
import Winter from "./components/Products/Winter";
import GlobalStyle from "./components/globalStyles";
import Footer from "./components/Footer/Footer"

function App() {
    const user = useSelector(selectUser)
    const dispatch = useDispatch()

    useEffect(() => {
        auth.onAuthStateChanged((userAuth) => {
            if (userAuth) {
                //User is signed in
                dispatch(login({
                    email: userAuth.email,
                    uid: userAuth.uid,
                    displayName: userAuth.displayName
                }))
            } else {
                //User is sign out
                dispatch(logout())
            }
        })
    }, [dispatch])
    return (
        <Router>
            <GlobalStyle/>
            <Switch>

                <Route exact path='/'>
                    {!user ? (
                        <Redirect to='login'/>
                    ) : (
                        <>
                            <HeaderBlock/>
                            <Footer/>
                        </>
                    )}
                </Route>

                <Route path='/login'>
                    {user ? <Redirect to='account'/> : <Login/>}
                </Route>

                <Route path='/signup'>
                    <Signup/>
                </Route>

                <Route path='/account' component={Account}>
                    {!user ? (
                        <Redirect to='login'/>
                    ) : (
                        <Account/>
                    )}
                </Route>

                <Route path='/production'>
                    <Production/>
                </Route>

                <Route path='/documentation'>
                    <Documentation/>
                </Route>

                <Route path='/distribution'>
                    <Distribution/>
                </Route>

                <Route path='/news'>
                    <News/>
                </Route>

                <Route path='/contacts'>
                    <Contacts/>
                </Route>

                <Route path='/classic' component={Classic}>
                    <Classic/>
                </Route>

                <Route path='/winter' component={Winter}>
                    <Winter/>
                </Route>

                <Route path='/anticorrosive' component={Anticorrosive}>
                    <Anticorrosive/>
                </Route>

                <Route path='/facade' component={Facade}>
                    <Facade/>
                </Route>

            </Switch>
        </Router>
    )
}

export default App