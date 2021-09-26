import React, {lazy, Suspense} from 'react'
import './App.css'
import {CircularProgress} from '@material-ui/core'
import {Redirect, Route, Switch} from 'react-router-dom'
import {LOGIN_PATH} from './routes'


const LoginComponent = lazy(() => import('./containers/login/Login'))


function App() {
    return (
        <Suspense fallback={<CircularProgress/>}>

            <Switch>

                {/*HOMEPAGE*/}
                <Route path={LOGIN_PATH} component={LoginComponent}/>

                <Redirect to={LOGIN_PATH}/>

            </Switch>
        </Suspense>
    )
}

export default App
