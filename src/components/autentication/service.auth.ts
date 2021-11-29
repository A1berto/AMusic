import firebase from './firebase.configs'
import {setBaseRequestURL} from 'fetch-with-redux-observable'
import {EVENTS_PATH} from '../../routes'
import {HashHistory} from '../..'
import {addError} from 'fetch-with-redux-observable/dist/user-message/user-message.actions'


export const socialMediaAuth = (provider: any, dispatch: any) => {
    return firebase.auth().signInWithPopup(provider)
        .then((response) => {
            console.info('response>>>', response)
            //@ts-ignore
            const idToken = provider?.providerId.includes('google') ? response?.credential?.idToken : response?.credential?.accessToken
            loginOrSignInCompleted(idToken)
            return response.user
        })
        .catch((error) => LoginOrSignInError(error, dispatch))
}

export const createProfileWithEmailAndPasswordAuth = (email: string, password: string, dispatch: any) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(response => {
            console.log('Response Registrazione>>>', response)
            //@ts-ignore
            loginOrSignInCompleted(response?.user?.multiFactor?.user?.accessToken)
        })
        .catch((error) => LoginOrSignInError(error, dispatch))
}

export const loginProfileWithEmailAndPasswordAuth = (email: string, password: string, dispatch: any) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
        .then(response => {
            console.log('Response Login>>>', response)
            //@ts-ignore
            loginOrSignInCompleted(response?.user?.multiFactor?.user?.accessToken)
        })
        .catch((error) => LoginOrSignInError(error, dispatch))
}


const loginOrSignInCompleted = (idToken: string) => {
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

    //REDIRECT TO EVENTS SECTION
    HashHistory.push(EVENTS_PATH)

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