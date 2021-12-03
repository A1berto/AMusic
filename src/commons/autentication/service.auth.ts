import firebase from './firebase.configs'
import {DEFAULT_REQUEST_ID, setBaseRequestURL} from 'fetch-with-redux-observable'
import {addError} from 'fetch-with-redux-observable/dist/user-message/user-message.actions'
import {fetchProfileAction} from '../../containers/profile/redux/profile.actions'
import {getAuth, updateProfile} from 'firebase/auth'
import {ILoginFormProps} from '../../containers/login/login.types'


export const socialMediaAuth = (provider: any, dispatch: any) => {
    return firebase.auth().signInWithPopup(provider)
        .then((response) => {
            return response?.user?.getIdToken()
        }).then((idToken) => {
            idToken && loginOrSignInCompleted(idToken, dispatch)
        })
        .catch((error) => LoginOrSignInError(error, dispatch))
}

export const createProfileWithEmailAndPasswordAuth = (formValues: ILoginFormProps, dispatch: any) => {
    const {email, password} = formValues

    return firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(response => {
            //@ts-ignore
            loginOrSignInCompleted(response?.user?.multiFactor?.user?.accessToken, dispatch, formValues)
        })
        .catch((error) => LoginOrSignInError(error, dispatch))
}

export const loginProfileWithEmailAndPasswordAuth = (email: string, password: string, dispatch: any) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
        .then(response => {
            //@ts-ignore
            loginOrSignInCompleted(response?.user?.multiFactor?.user?.accessToken, dispatch)
        })
        .catch((error) => LoginOrSignInError(error, dispatch))
}


export const loginOrSignInCompleted = (idToken: string, dispatch: any, formValues?: ILoginFormProps) => {

    console.log('Authentication')

    setBaseRequestURL({
        devUrl: process.env.REACT_APP_BACKEND_URL || '',
        prodUrl: process.env.REACT_APP_BACKEND_URL || '.',
        headers: {
            //@ts-ignore
            Authorization: `Bearer ${idToken}`
        },
        retryStrategy: {
            attempts: 0,
            delayMs: 0,
        }
    })

    //If formValues are passed it means that the user is signedIn
    if (formValues) {
        const auth = getAuth()
        const formattedName = !!formValues.name ? formValues.name?.charAt(0).toUpperCase() + formValues.name.slice(1) : ''
        const formattedSurname = !!formValues.surname ? formValues.surname?.charAt(0).toUpperCase() + formValues.surname.slice(1) : ''
        !!auth.currentUser && updateProfile(auth.currentUser, {
            displayName: `${formattedName} ${formattedSurname}`,
            photoURL: ''
        })
    }

    dispatch(fetchProfileAction.build(null, DEFAULT_REQUEST_ID))

}

const LoginOrSignInError = (error: any, dispatch: any) => {
    console.log('error>>>', error)
    dispatch(addError({userMessage: 'Ops! Errore durante la fase di autenticazione'}))
}