import React, { Suspense, useEffect } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Login from './components/Login/Login'
import { useDispatch, useSelector } from 'react-redux'
import { login, logout, selectUser } from './features/userSlice'
import Signup from './components/Signup/Signup'
import Account from './components/Account/Account'
import { auth } from './components/firebase'
import ProductionPage from './pages/ProductionPage'
import Documentation from './pages/Documentation'
import Distribution from './pages/Distribution'
import Contacts from './pages/Contacts'
import News from './pages/News'
import Index from './pages/Index'
import Error from './pages/Error'
import GlobalStyle, { AppWrapper } from './components/globalStyles'
import ProductDetails from './components/ItemList/ProductDetails'
import Preloader from './components/preloader'
//import './i18n'

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
			<Suspense fallback={<Preloader/>}>
				<Switch>
					<AppWrapper>
						<Route exact path='/'>
							{!user ? <Redirect to='login'/> : <Index/>}
						</Route>

						<Route path='/login'>
							{user ? <Redirect to='/'/> : <Login/>}
						</Route>

						<Route path='/signup' component={Signup}/>

						<Route path='/account'>
							{!user ? <Redirect to='login'/> : <Account/>}
						</Route>

						<Route exact path='/production' component={ProductionPage}/>
						<Route path='/production/:product' render={({ match }) => (
							<ProductDetails productName={match.params.product}/>
						)}/>

						<Route exact path='/documentation' component={Documentation}/>
						<Route path='/distribution' component={Distribution}/>
						<Route path='/news' component={News}/>
						<Route path='/contacts' component={Contacts}/>
						<Route path='/error' component={Error}/>
						<Redirect to='/error'/>
					</AppWrapper>
				</Switch>
			</Suspense>
		</>
	)
}

export default App
