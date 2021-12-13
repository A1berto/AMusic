import React, {lazy, Suspense, useCallback, useEffect} from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import {
    EVENTS_HISTORY_PATH,
    EVENTS_PATH,
    FRIENDS_LIST_PATH,
    INFO_APP_PATH,
    LOGIN_OR_SIGNIN_PATH,
    PROFILE_PATH
} from './routes'
import {AMusicContainer} from './commons/AMusicContainer'
import {FallbackSpinner} from './commons/fallback-spinner/FallbackSpinner'
import 'animate.css'
import DialogProvider from './commons/dialogs/DialogProvider'
import {SnackbarProvider} from 'notistack'
import {SnackbarConsumer} from './commons/SnackbarConsumer'
import {setBaseRequestURL} from 'fetch-with-redux-observable'
import {getAuth} from 'firebase/auth'
import {halfHour} from './utils'
import {useDispatch, useSelector} from 'react-redux'
import {profileIdSelector} from './containers/profile/redux/profile.selectors'
import {IGeoLocation} from './containers/events/eventi.types'
import {updateUserLocation} from './containers/events/user-location/user-location.actions'
import {BASE_REQUEST_BACKEND_URL} from './fetch.constants'

/* Lazy loading of principle components*/
const LoginComponent = lazy(() => import('./containers/login/LoginOrSignInContainer'))
const ProfileComponent = lazy(() => import('./containers/profile/ProfileContainer'))
const EventiComponent = lazy(() => import('./containers/events/EventsListContainer'))
const FriendsListComponent = lazy(() => import('./containers/friends/FriendsContainer'))
const EventsHistoryComponent = lazy(() => import('./containers/eventsHistory/EventsHistory'))
const InfoAppComponent = lazy(() => import('./containers/infoApp/InfosContainer'))


function App() {

    const profileId = useSelector(profileIdSelector)
    const dispatch = useDispatch()

    /*Every 30 minutes we set the header with setBaseRequestUrl to allow user to be recognized*/
    useEffect(() => {
        const subscription = setInterval(() => {
            const auth = getAuth()

            auth.currentUser && auth?.currentUser?.getIdToken(true)
                .then((idToken: string) => setBaseRequestURL({
                    devUrl: BASE_REQUEST_BACKEND_URL,
                    prodUrl: BASE_REQUEST_BACKEND_URL,
                    headers: {
                        //@ts-ignore
                        Authorization: `Bearer ${idToken}`
                    },
                    retryStrategy: {
                        attempts: 0,
                        delayMs: 0,
                    }
                }))
        }, halfHour)
        /*clearInterval during unMount*/
        return () => clearInterval(subscription)
    }, [])

    // user gelocalization
    useEffect(() => {
        if (!navigator.geolocation) {
            console.error('Geolocalizzazione non supportata!')
        } else {
            console.info('Geolocalizzazione supportata!')
            navigator.geolocation.getCurrentPosition((loc) => {
                const location: IGeoLocation = {
                    accuracy: loc.coords.accuracy,
                    altitude: loc.coords.altitude,
                    altitudeAccuracy: loc.coords.altitudeAccuracy,
                    latitude: loc.coords.latitude,
                    longitude: loc.coords.longitude,
                    heading: loc.coords.heading,
                }
                console.info('Posizione utente', location)
                dispatch(updateUserLocation(location))
            }, () => {
                console.error('Impossibile acquisire la posizione!')
            })
        }
    }, [dispatch])

    /*Gard path*/
    const canGoToSpecificSectionExpectLogin = useCallback(() => {
        return !!profileId
    }, [profileId])

    return (
        <>
            <Suspense fallback={<FallbackSpinner/>}>
                <AMusicContainer>
                    <Switch>

                        {/*LOGIN*/}
                        <Route path={LOGIN_OR_SIGNIN_PATH} component={LoginComponent}/>

                        {/*EVENTS*/}
                        <Route path={EVENTS_PATH}
                               render={() => canGoToSpecificSectionExpectLogin() ? <EventiComponent/> :
                                   <Redirect to={`${LOGIN_OR_SIGNIN_PATH}`}/>}/>

                        {/*PROFILE*/}
                        <Route path={PROFILE_PATH}
                               render={() => canGoToSpecificSectionExpectLogin() ? <ProfileComponent/> :
                                   <Redirect to={`${LOGIN_OR_SIGNIN_PATH}`}/>}/>

                        {/*INFO APP*/}
                        <Route path={INFO_APP_PATH}
                               render={() => canGoToSpecificSectionExpectLogin() ? <InfoAppComponent/> :
                                   <Redirect to={`${LOGIN_OR_SIGNIN_PATH}`}/>}/>

                        {/*FRIENDS LIST*/}
                        <Route path={FRIENDS_LIST_PATH}
                               render={() => canGoToSpecificSectionExpectLogin() ? <FriendsListComponent/> :
                                   <Redirect to={`${LOGIN_OR_SIGNIN_PATH}`}/>}/>

                        {/*EVENTS HISTORY*/}
                        <Route path={EVENTS_HISTORY_PATH}
                               render={() => canGoToSpecificSectionExpectLogin() ? <EventsHistoryComponent/> :
                                   <Redirect to={`${LOGIN_OR_SIGNIN_PATH}`}/>}/>

                        {/*DEFAULT*/}
                        <Redirect to={LOGIN_OR_SIGNIN_PATH}/>

                    </Switch>

                    {/* GENERIC DIALOGS */}
                    <DialogProvider/>

                </AMusicContainer>
            </Suspense>

            {/* APP SNACKBARS */}
            <SnackbarProvider maxSnack={4} anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}>
                <SnackbarConsumer variant="error" time={4000}/>
                <SnackbarConsumer variant="success" time={4000}/>
                <SnackbarConsumer variant="info" time={4000}/>
                <SnackbarConsumer variant="warning" time={4000}/>
            </SnackbarProvider>
        </>

    )
}

export default App
