import {FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider } from "firebase/auth"

export const googleProvider = new GoogleAuthProvider().setCustomParameters({
    display: 'popup',
})
export const facebookProvider = new FacebookAuthProvider().setCustomParameters({
    display: 'popup',
    login_hint: 'email@email.com',
    prompt: 'consent'
})
export const gitHubProvider = new GithubAuthProvider().setCustomParameters({
    display: 'popup',
    login_hint: 'email@email.com',
    prompt: 'consent'
})
