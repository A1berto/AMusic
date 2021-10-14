import React, {lazy, Suspense} from 'react'
import './App.css'
import {Redirect, Route, Switch} from 'react-router-dom'
import {INFO_APP_PATH, LOGIN_PATH} from './routes'
import {AMusicContainer} from './components/AMusicContainer'
import {FallbackSpinner} from './components/fallback-spinner/FallbackSpinner'


const LoginComponent = lazy(() => import('./containers/login/Login'))
const InfoAppComponent = lazy(() => import('./containers/infoApplicazione/InformazioniApplicazione'))


function App() {
    return (
        <Suspense fallback={<FallbackSpinner/>}>
            <AMusicContainer>
                <Switch>

                    {/*HOMEPAGE*/}
                    <Route path={LOGIN_PATH} component={LoginComponent}/>

                    {/*INFO APP*/}
                    <Route path={INFO_APP_PATH} component={InfoAppComponent}/>

                    <Redirect to={LOGIN_PATH}/>

                </Switch>
            </AMusicContainer>
        </Suspense>
    )
}

export default App
