import firebase from './firebase.configs'
import {DEFAULT_REQUEST_ID, setBaseRequestURL} from 'fetch-with-redux-observable'
import {addError} from 'fetch-with-redux-observable/dist/user-message/user-message.actions'
import {fetchProfileAction} from '../../containers/profile/redux/profile.actions'


export const socialMediaAuth = (provider: any, dispatch: any) => {
    return firebase.auth().signInWithPopup(provider)
        .then((response) => {
            console.info('response>>>', response)
            //@ts-ignore
            const idToken = provider?.providerId.includes('google') ? response?.credential?.idToken : response?.credential?.accessToken
            loginOrSignInCompleted(idToken, dispatch)
            return response.user
        })
        .catch((error) => LoginOrSignInError(error, dispatch))
}

export const createProfileWithEmailAndPasswordAuth = (email: string, password: string, dispatch: any) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(response => {
            console.log('Response Registrazione>>>', response)
            //@ts-ignore
            loginOrSignInCompleted(response?.user?.multiFactor?.user?.accessToken, dispatch)
        })
        .catch((error) => LoginOrSignInError(error, dispatch))
}

export const loginProfileWithEmailAndPasswordAuth = (email: string, password: string, dispatch: any) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
        .then(response => {
            console.log('Response LoginOrSignInContainer>>>', response)
            //@ts-ignore
            loginOrSignInCompleted(response?.user?.multiFactor?.user?.accessToken, dispatch)
        })
        .catch((error) => LoginOrSignInError(error, dispatch))
}


const loginOrSignInCompleted = (idToken: string, dispatch: any) => {
    setBaseRequestURL({
        devUrl: process.env.REACT_APP_BACKEND_URL || '',
        prodUrl: process.env.REACT_APP_BACKEND_URL || '.',
        headers: {
            //@ts-ignore
            Autorization: `Bearer ${idToken}`
        },
        retryStrategy: {
            attempts: 0,
            delayMs: 0,
        }
    })

    dispatch(fetchProfileAction.build(null, DEFAULT_REQUEST_ID))
    /* TODO aggiungere
        dispatch(fetchEventsAction.build(null, DEFAULT_REQUEST_ID))
        e quando torna fetchEventAction.success faccio il redirect alla pagina di EVENTS_PATH
    */


    /*
        store.dispatch(addSuccess({userMessage: 'Accesso effettuato '}))
    */

}

const LoginOrSignInError = (error: any, dispatch: any) => {
    console.log('error>>>', error)

    dispatch(addError({userMessage: 'Errrrroreee235432532'}))

    /*
        addError({userMessage: 'Ops! Errore durante l\'accesso'})
    */
}