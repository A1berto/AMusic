import {setBaseRequestURL} from 'fetch-with-redux-observable'
import {applyMiddleware, compose, createStore} from 'redux'
import {rootEpics} from './redux/epics'
import {createEpicMiddleware} from 'redux-observable'
import {AMusicReducer} from './containers/login/redux/login.reducer'
import {BASE_REQUEST_BACKEND_URL} from './index'

export function initConfiguration() {

    // config init config fetch-with-redux-observable
        const fetchConfig = setBaseRequestURL({
        devUrl: BASE_REQUEST_BACKEND_URL,
        prodUrl: BASE_REQUEST_BACKEND_URL,
        headers: {},
        retryStrategy: {
            attempts: 0,
            delayMs: 0,
        },
    })

    // MUST BE USED IN TEST BUILD
    const reduxDevToolExtensionComposeConfiguration = process.env.NODE_ENV === 'development' ? {} : Object.freeze({
        features: {
            pause: false, // start/pause recording of dispatched actions
            lock: false, // lock/unlock dispatching actions and side effects
            persist: false, // persist states on page reloading
            export: true, // export history of actions in a file
            import: false, // import history of actions from a file
            jump: false, // jump back and forth (time travelling)
            skip: false, // skip (cancel) actions
            reorder: false, // drag and drop actions in the history list
            dispatch: false, // dispatch custom actions or action creators
            test: true, // generate tests for the selected actions
        },
    })

    /**
     * REDUX DEVTOOLS
     */
    /* eslint-disable  @typescript-eslint/no-explicit-any */
    const composeEnhancers: any = typeof (window as unknown) === 'object' &&
    typeof (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ !== 'undefined'
        ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(reduxDevToolExtensionComposeConfiguration)
        : compose

    /**
     * REDUX OBSERVABLE - EPICS MIDDELWARE
     */
    const epicsMiddleware = createEpicMiddleware()

    return {
        getStore: () => {

            const store = createStore(
                AMusicReducer,
                {},
                composeEnhancers(
                    applyMiddleware(epicsMiddleware),
                ))

            store.subscribe(() => {
                localStorage.setItem('reduxState', JSON.stringify(store.getState()))
            })

            epicsMiddleware.run(rootEpics)
            return store
        },
        fetchConfig,
    }
}