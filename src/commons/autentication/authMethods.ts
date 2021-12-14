import {FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider} from 'firebase/auth'

export const googleProvider = new GoogleAuthProvider().addScope('email')

export const facebookProvider = new FacebookAuthProvider().setCustomParameters({
    display: 'popup',
    login_hint: 'email@email.com',
    prompt: 'consent'
})

export const gitHubProvider = new GithubAuthProvider().addScope('user')