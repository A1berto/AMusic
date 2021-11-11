import React, {lazy, Suspense, useEffect} from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import {INFO_APP_PATH, LOGIN_PATH, PROFILE_PATH, EVENTI_PATH, FRIENDS_LIST_PATH} from './routes'
import {AMusicContainer} from './components/AMusicContainer'
import {FallbackSpinner} from './components/fallback-spinner/FallbackSpinner'
import 'animate.css'
import DialogProvider from './components/dialogs/DialogProvider'
import {useDispatch} from 'react-redux'
import {fetchProfileAction} from './containers/profile/redux/profile.actions'
import {DEFAULT_REQUEST_ID} from 'fetch-with-redux-observable'

const LoginComponent = lazy(() => import('./containers/login/Login'))
const EventiComponent = lazy(() => import('./containers/eventi/Events'))
const InfoAppComponent = lazy(() => import('./containers/infoApp/InfosApp'))
const ProfileComponent = lazy(() => import('./containers/profile/Profile'))
const FriendsListComponent = lazy(() => import('./containers/friends-list/FriendsList'))


function App() {

    const dispatch= useDispatch()

    useEffect(()=>{
        console.log("Qui dentro")
        dispatch(fetchProfileAction.build(null, DEFAULT_REQUEST_ID))
    },[])


    return (
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

                    <Route path={FRIENDS_LIST_PATH} component={FriendsListComponent}/>

                    <Redirect to={LOGIN_PATH}/>

                </Switch>

                {/* GENERIC DIALOGS */}
                <DialogProvider/>

            </AMusicContainer>
        </Suspense>
    )
}

export default App
