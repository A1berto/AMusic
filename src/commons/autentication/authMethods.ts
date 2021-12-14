import {FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider} from 'firebase/auth'

export const googleProvider = new GoogleAuthProvider().addScope('email')

export const facebookProvider = new FacebookAuthProvider().addScope('public_profile')

export const gitHubProvider = new GithubAuthProvider().addScope('user')