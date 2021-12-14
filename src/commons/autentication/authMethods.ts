import {FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider} from 'firebase/auth'

export const googleProvider = new GoogleAuthProvider().addScope('email')

export const facebookProvider = new FacebookAuthProvider()
facebookProvider.addScope('public_profile')
facebookProvider.addScope('email')
facebookProvider.addScope('user_likes')
facebookProvider.addScope('user_friends')

export const gitHubProvider = new GithubAuthProvider().addScope('user')