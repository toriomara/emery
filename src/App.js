import React, {useEffect} from 'react'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import Login from './components/Login/Login'
import {useDispatch, useSelector} from 'react-redux'
import {login, logout, selectUser} from './features/userSlice'
import Signup from './components/Signup/Signup'
import Account from './components/Account/Account'
import {auth} from './components/firebase'
import Production from './pages/Production'
import Documentation from './pages/Documentation'
import Distribution from './pages/Distribution'
import Contacts from './pages/Contacts'
import News from './pages/News'
import Classic from './pages/Classic'
import Anticorrosive from './pages/Anticorrosive'
import Front from './pages/Front'
import Winter from './pages/Winter'
import Index from './pages/Index'
import GlobalStyle, {AppWrapper} from './components/globalStyles'

const App = () => {
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
                <AppWrapper>
                    <Route exact path='/' component={Index}>
                        {!user ? (
                            <Redirect to='login'/>
                        ) : (
                            <Index/>
                        )}
                    </Route>

                    <Route path='/login'>
                        {user ? <Redirect to='account'/> : <Login/>}
                    </Route>

                    <Route path='/signup' render={() => <Signup/>}/>

                    <Route path='/account' component={Account}>
                        {!user ? (
                            <Redirect to='login'/>
                        ) : (
                            <Account/>
                        )}
                    </Route>

                    <Route path='/production' render={() => <Production/>}/>
                    <Route path='/documentation' render={() => <Documentation/>}/>
                    <Route path='/distribution' render={() => <Distribution/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/contacts' render={() => <Contacts/>}/>
                    <Route path='/classic' render={() => <Classic/>}/>
                    <Route path='/winter' render={() => <Winter/>}/>
                    <Route path='/anticorrosive' render={() => <Anticorrosive/>}/>
                    <Route path='/front' render={() => <Front/>}/>
                </AppWrapper>
            </Switch>
        </Router>
    )
}

export default App
