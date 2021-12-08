import firebase from './firebase.configs'

export const googleProvider = new firebase.auth.GoogleAuthProvider().setCustomParameters({
    display: 'popup',
})
export const facebookProvider = new firebase.auth.FacebookAuthProvider().setCustomParameters({
    display: 'popup',
    login_hint: 'email@email.com',
    prompt:'consent'
})
export const gitHubProvider = new firebase.auth.GithubAuthProvider().setCustomParameters({
    display: 'popup',
    login_hint: 'email@email.com',
    prompt:'consent'
})
