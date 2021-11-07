import React, {lazy, Suspense} from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import {INFO_APP_PATH, LOGIN_PATH, PROFILE_PATH, EVENTI_PATH} from './routes'
import {AMusicContainer} from './components/AMusicContainer'
import {FallbackSpinner} from './components/fallback-spinner/FallbackSpinner'
import 'animate.css'
import DialogProvider from './components/dialogs/DialogProvider'

const LoginComponent = lazy(() => import('./containers/login/Login'))
const EventiComponent = lazy(() => import('./containers/eventi/Events'))
const InfoAppComponent = lazy(() => import('./containers/infoApp/InfosApp'))
const ProfileComponent = lazy(() => import('./containers/profile/Profile'))


function App() {
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

                    <Redirect to={LOGIN_PATH}/>

                </Switch>

                {/* GENERIC DIALOGS */}
                <DialogProvider/>

            </AMusicContainer>
        </Suspense>
    )
}

export default App
