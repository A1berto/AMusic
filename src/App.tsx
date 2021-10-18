import React, {lazy, Suspense} from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import {INFO_APP_PATH, LOGIN_PATH, PROFILE_PATH} from './routes'
import {AMusicContainer} from './components/AMusicContainer'
import {FallbackSpinner} from './components/fallback-spinner/FallbackSpinner'
import 'animate.css';

const LoginComponent = lazy(() => import('./containers/login/Login'))
const InfoAppComponent = lazy(() => import('./containers/infoApp/InfosApp'))
const ProfileComponent = lazy(() => import('./containers/profile/Profile'))


function App() {
    return (
        <Suspense fallback={<FallbackSpinner/>}>
            <AMusicContainer>
                <Switch>

                    {/*HOMEPAGE*/}
                    <Route path={LOGIN_PATH} component={LoginComponent}/>

                    {/*INFO APP*/}
                    <Route path={INFO_APP_PATH} component={InfoAppComponent}/>

                    {/*PROFILE*/}
                    <Route path={PROFILE_PATH} component={ProfileComponent}/>

                    <Redirect to={LOGIN_PATH}/>

                </Switch>
            </AMusicContainer>
        </Suspense>
    )
}

export default App
