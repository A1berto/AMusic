import React, {lazy, Suspense} from 'react'
import './App.css'
import {CircularProgress} from '@material-ui/core'
import {Redirect, Route,Switch} from 'react-router-dom'
import {HOMEPAGE_PATH} from './routes'


const HomepageComponent = lazy(() => import('./containers/homepage/Homepage'))


function App() {
    return (
        <Suspense fallback={<CircularProgress/>}>
            <div>
                <Switch>

                    {/*HOMEPAGE*/}
                    <Route path={HOMEPAGE_PATH} component={HomepageComponent}/>

                    <Redirect to={HOMEPAGE_PATH}/>

                </Switch>
            </div>
        </Suspense>
    )
}

export default App
