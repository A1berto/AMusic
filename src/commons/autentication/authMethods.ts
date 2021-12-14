import {FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider} from 'firebase/auth'

export const googleProvider = new GoogleAuthProvider().addScope('email')

export const facebookProvider = new FacebookAuthProvider().addScope('email')

export const gitHubProvider = new GithubAuthProvider().addScope('user')