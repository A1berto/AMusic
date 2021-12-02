import React, {lazy, Suspense} from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import {EVENTS_HISTORY_PATH, EVENTS_PATH, FRIENDS_LIST_PATH, INFO_APP_PATH, LOGIN_PATH, PROFILE_PATH} from './routes'
import {AMusicContainer} from './commons/AMusicContainer'
import {FallbackSpinner} from './commons/fallback-spinner/FallbackSpinner'
import 'animate.css'
import DialogProvider from './commons/dialogs/DialogProvider'
import {SnackbarProvider} from 'notistack'
import {SnackbarConsumer} from './commons/SnackbarConsumer'

/* Lazy loading of principle components*/
const LoginComponent = lazy(() => import('./containers/login/LoginOrSignInContainer'))
const ProfileComponent = lazy(() => import('./containers/profile/ProfileContainer'))
const EventiComponent = lazy(() => import('./containers/events/EventsContainer'))
const FriendsListComponent = lazy(() => import('./containers/friends/FriendsContainer'))
const InfoAppComponent = lazy(() => import('./containers/infoApp/InfosContainer'))
const EventsHistoryComponent = lazy(() => import('./containers/infoApp/InfosContainer'))


function App() {

    return (<>
            <Suspense fallback={<FallbackSpinner/>}>
                <AMusicContainer>
                    <Switch>

                        {/*LOGIN*/}
                        <Route path={LOGIN_PATH} component={LoginComponent}/>

                        {/*EVENTI*/}
                        <Route path={EVENTS_PATH} component={EventiComponent}/>

                        {/*PROFILE*/}
                        <Route path={PROFILE_PATH} component={ProfileComponent}/>

                        {/*INFO APP*/}
                        <Route path={INFO_APP_PATH} component={InfoAppComponent}/>

                        {/*FRIENDS LIST*/}
                        <Route path={FRIENDS_LIST_PATH} component={FriendsListComponent}/>

                        {/*EVENTS HISTORY*/}
                        <Route path={EVENTS_HISTORY_PATH} component={EventsHistoryComponent}/>

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
