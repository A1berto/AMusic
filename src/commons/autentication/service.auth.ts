import firebase from './firebase.configs'
import {DEFAULT_REQUEST_ID, setBaseRequestURL} from 'fetch-with-redux-observable'
import {addError, addSuccess} from 'fetch-with-redux-observable/dist/user-message/user-message.actions'
import {fetchProfileAction} from '../../containers/profile/redux/profile.actions'
import {getAuth, updateProfile} from 'firebase/auth'
import {ILoginFormProps} from '../../containers/login/login.types'
import {clearAMusicState} from '../../containers/login/redux/login.actions'
import {BASE_REQUEST_BACKEND_URL} from '../../index'

/**
 * @description Method that provide resetPassword
 * */
export const resetPasswordAuth = (email: string, dispatch: any) => {
    return firebase.auth().sendPasswordResetEmail(email, null)
        .then(() => {
            return dispatch(addSuccess({userMessage: 'Controlla la tua posta elettronica'}))
        })
        .catch((error) => LoginOrSignInError(error, dispatch))
}

/**
 * @description Method that provide socialMedia login
 * */
export const socialMediaAuth = (provider: any, dispatch: any) => {
    return firebase.auth().signInWithPopup(provider)
        .then((response) =>
            //@ts-ignore
            response.additionalUserInfo?.providerId.includes('google') ? response?.user?.getIdToken() : response.user?.multiFactor.user.accessToken
        ).then((idToken) => {
            idToken && loginOrSignInCompleted(idToken, dispatch)
        })
        .catch((error) => LoginOrSignInError(error, dispatch))
}

/**
 * @description Method that provide signIn whit email and password
 * */
export const createProfileWithEmailAndPasswordAuth = (formValues: ILoginFormProps, dispatch: any) => {
    const {email, password} = formValues

    return firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(response => {
            //@ts-ignore
            loginOrSignInCompleted(response?.user?.multiFactor?.user?.accessToken, dispatch, formValues)
        })
        .catch((error) => LoginOrSignInError(error, dispatch))
}

/**
 * @description Method that provide login with email and password
 * */
export const loginProfileWithEmailAndPasswordAuth = (email: string, password: string, dispatch: any) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
        .then(response => {
            //@ts-ignore
            loginOrSignInCompleted(response?.user?.multiFactor?.user?.accessToken, dispatch)
        })
        .catch((error) => LoginOrSignInError(error, dispatch))
}


/**
 * @description When loginOrSignIn went success, I set the base Request url to identify the user
 * */
export const loginOrSignInCompleted = (idToken: string, dispatch: any, formValues?: ILoginFormProps) => {

    setBaseRequestURL({
        devUrl: BASE_REQUEST_BACKEND_URL,
        prodUrl: BASE_REQUEST_BACKEND_URL,
        headers: {
            //@ts-ignore
            Authorization: `Bearer ${idToken}`,
            'Access-Control-Allow-Origin':'*'
        },
        retryStrategy: {
            attempts: 0,
            delayMs: 0,
        }

    })

    //If it come in it means that the user is signedIn
    if (formValues) {
        const auth = getAuth()
        const formattedName = !!formValues.name ? formValues.name?.charAt(0).toUpperCase() + formValues.name.slice(1) : ''
        const formattedSurname = !!formValues.surname ? formValues.surname?.charAt(0).toUpperCase() + formValues.surname.slice(1) : ''
        !!auth.currentUser && updateProfile(auth.currentUser, {
            displayName: `${formattedName} ${formattedSurname}`,
            photoURL: ''
        })
    }

    dispatch(clearAMusicState())
    dispatch(fetchProfileAction.build(null, DEFAULT_REQUEST_ID))
}

/**
 * @description If login or signIn have gone wrong, I show a snackbar error
 * */
const LoginOrSignInError = (error: any, dispatch: any) => {
    console.log('error>>>', error.code)
    let errorMessage = ''
    switch (error.code) {
        case 'auth/invalid-email':
            errorMessage = 'Ops! Email non valida'
            break
        case 'auth/user-not-found':
            errorMessage = 'Ops! Utente inesistente'
            break
        case 'auth/email-already-in-use':
            errorMessage = 'Ops! Utente già esistente, cambiare email'
            break
        case 'auth/id-token-expired':
            errorMessage = 'Ops! IdToken scaduto, ricaricare la pagina'
            break
        case 'auth/internal-error':
            errorMessage = 'Ops! Errore lato server, riprovare'
            break
        case 'auth/invalid-credential':
            errorMessage = 'Ops! Credenziali non valide'
            break
        case 'auth/wrong-password':
            errorMessage = 'Ops! Password errata'
            break
        case 'auth/cancelled-popup-request':
            errorMessage = 'Ops! Cancellata la richiesta del popup,riprova'
            break
        case 'auth/popup-blocked':
            errorMessage = 'Ops! Popup bloccato, riprova'
            break
        case 'auth/account-exists-with-different-credential':
            errorMessage = 'Ops! Esiste un account con le stesse credenziali email.'
            break
        default:
            errorMessage= 'Ops! Errore durante la fase di autenticazione'
    }
    dispatch(addError({userMessage: errorMessage}))
}