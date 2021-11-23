import React, {lazy, Suspense, useEffect} from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import {EVENTI_PATH, FRIENDS_LIST_PATH, INFO_APP_PATH, LOGIN_PATH, PROFILE_PATH} from './routes'
import {AMusicContainer} from './components/AMusicContainer'
import {FallbackSpinner} from './components/fallback-spinner/FallbackSpinner'
import 'animate.css'
import DialogProvider from './components/dialogs/DialogProvider'
import {useDispatch} from 'react-redux'
import {fetchProfileAction} from './containers/profile/redux/profile.actions'
import {DEFAULT_REQUEST_ID} from 'fetch-with-redux-observable'
import {SnackbarProvider} from 'notistack'
import {SnackbarConsumer} from './components/SnackbarConsumer'

/* Lazy loading of principle components*/
const LoginComponent = lazy(() => import('./containers/login/Login'))
const ProfileComponent = lazy(() => import('./containers/profile/Profile'))
const EventiComponent = lazy(() => import('./containers/eventi/Events'))
const FriendsListComponent = lazy(() => import('./containers/friends/Friends'))
const InfoAppComponent = lazy(() => import('./containers/infoApp/InfosApp'))


function App() {
    const dispatch = useDispatch()

    /** @description During the application starting we call profile action **/
    useEffect(() => {
        dispatch(fetchProfileAction.build(null, DEFAULT_REQUEST_ID))
    }, [dispatch])

    return (<>
            <Suspense fallback={<FallbackSpinner/>}>
                <AMusicContainer>
                    <Switch>

                        {/*LOGIN*/}
                        <Route path={LOGIN_PATH} component={LoginComponent}/>

                        {/*EVENTI*/}
                        <Route path={EVENTI_PATH} component={EventiComponent}/>

                        {/*PROFILE*/}
                        <Route path={PROFILE_PATH} component={ProfileComponent}/>

                        {/*INFO APP*/}
                        <Route path={INFO_APP_PATH} component={InfoAppComponent}/>

                        {/*FRIENDS LIST*/}
                        <Route path={FRIENDS_LIST_PATH} component={FriendsListComponent}/>

                        {/*DEFAULT*/}
                        <Redirect to={LOGIN_PATH}/>

                    </Switch>

                    {/* GENERIC DIALOGS */}
                    <DialogProvider/>

                </AMusicContainer>
            </Suspense>

            {/* APP SNACKBARS */}
            <SnackbarProvider maxSnack={4} anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}>
                <SnackbarConsumer variant="error" time={4000}/>
                <SnackbarConsumer variant="success" time={4000}/>
                <SnackbarConsumer variant="info" time={4000}/>
                <SnackbarConsumer variant="warning" time={4000}/>
            </SnackbarProvider>
        </>

    )
}

export default App
