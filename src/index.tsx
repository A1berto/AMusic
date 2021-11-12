import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import './App.css'
import App from './App'
import {Router} from 'react-router-dom'
import {createHashHistory} from 'history'
import {ThemeProvider} from '@material-ui/core/styles'
import {AMUSIC_THEME} from './AMusic_theme'
import * as serviceWorker from './serviceWorker'
import {Provider} from 'react-redux'
import {initConfiguration} from './initConfig'
import {FetchProvider} from 'react-fetch-it-hook'


// set version in window.buildID
(window as any).buildID = `${process.env.REACT_APP_BUILD_ID}`

export const HashHistory = createHashHistory()

const {getStore} = initConfiguration()

ReactDOM.render(
    <React.StrictMode>
        <Provider store={getStore()}>
            <FetchProvider value={{basePath: process.env.REACT_APP_BACKEND_URL || '', logLevel: 'INFO'}}>
                <Router history={HashHistory}>
                    <ThemeProvider theme={AMUSIC_THEME}>
                        <App/>
                    </ThemeProvider>
                </Router>
            </FetchProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()