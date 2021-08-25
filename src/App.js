import React, {useEffect} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Login from './components/Login/Login'
import {useDispatch, useSelector} from 'react-redux'
import {login, logout, selectUser} from './features/userSlice'
import Signup from './components/Signup/Signup'
import Account from './components/Account/Account'
import {auth} from './components/firebase'
import ProductionPage from './pages/ProductionPage'
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
import ProductDetails from "./components/ItemList/ProductDetails";
import DocumentationDetails from "./components/DocList/DocumentationDetails";

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
        <>
            <GlobalStyle/>
            <Switch>
                <AppWrapper>
                    <Route exact path='/'>
                        {!user ? (
                            <Redirect to='login'/>
                        ) : (
                            <Index/>
                        )}
                    </Route>

                    <Route path='/login'>
                        {user ? <Redirect to='account'/> : <Login/>}
                    </Route>

                    <Route path='/signup' component={Signup}/>

                    <Route path='/account'>
                        {!user ? (
                            <Redirect to='login'/>
                        ) : (
                            <Account/>
                        )}
                    </Route>

                    <Route exact path='/production' component={ProductionPage}/>
                    <Route path='/production/:product' render={({match}) => (
                        <ProductDetails productName={match.params.product}/>
                    )}/>

                    <Route exact path='/documentation' component={Documentation}/>
                    <Route exact path='/documentation/:doc' render={({match}) => (
                        <DocumentationDetails productName={match.params.doc}/>
                    )}/>

                    <Route path='/distribution' component={Distribution}/>
                    <Route path='/news' component={News}/>
                    <Route path='/contacts' component={Contacts}/>
                    <Route path='/classic' render={() => <Classic/>}/>
                    <Route path='/winter' render={() => <Winter/>}/>
                    <Route path='/anticorrosive' render={() => <Anticorrosive/>}/>
                    <Route path='/front' render={() => <Front/>}/>
                </AppWrapper>
            </Switch>
        </>
    )
}

export default App
