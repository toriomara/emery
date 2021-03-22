import React from 'react';

const N = () => {
    return (
        <div>
            <Router>
                <div className='App'>
                    <Switch>
                        <Route exact path='/'>
                            <TopHeader isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
                            {isMenuOpen && <Menu/>}
                            <HeaderBlock/>
                        </Route>
                        <Route exact path='/login'>
                            {user ? <Redirect to='teslaaccount'/> : <Login/>}
                        </Route>
                        <Route exact path='/signup'>
                            <Signup/>
                        </Route>
                        <Route exact path='/teslaaccount'>
                            {!user ? (
                                <Redirect to='login'/>
                            ) : (
                                <>
                                    <TeslaAccount
                                        isMenuOpen={isMenuOpen}
                                        setIsMenuOpen={setIsMenuOpen}
                                    />
                                    {isMenuOpen && <Menu/>}
                                </>
                            )}
                        </Route>
                    </Switch>
                </div>
            </Router>*/
        </div>
    );
};

export default N;