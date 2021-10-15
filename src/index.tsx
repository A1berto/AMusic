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
import * as serviceWorker from './serviceWorker';


export const HashHistory = createHashHistory()


ReactDOM.render(
    <React.StrictMode>
        <Router history={HashHistory}>
            <ThemeProvider theme={AMUSIC_THEME}>
                <App/>
            </ThemeProvider>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
