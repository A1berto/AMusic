import firebase from './firebase.configs'

export const socialMediaAuth = (provider: any) => {
    return firebase.auth().signInWithPopup(provider)
        .then((response) => {
            console.info('RESPONSE.USER>>>', response.user)
            return response.user
        })
        .catch((error) => {
            console.error('ERROR>>>', error)
            return error
        })
}

export const createProfileWithEmailAndPasswordAuth = (email: string, password: string) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(user => console.log('user>>>', user))
        .catch(error => console.log('error>>>', error))
}

export const loginProfileWithEmailAndPasswordAuth = (email: string, password: string) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => console.log('user>>>', user))
        .catch(error => console.log('error>>>', error))
}