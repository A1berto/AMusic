import firebase from 'firebase/compat'

const firebaseConfig = {
    apiKey: 'AIzaSyCUkwEovSweqUvkqEEJCdZbeM14A1F3qMc',
    authDomain: 'amusic-329813.firebaseapp.com',
    projectId: 'amusic-329813',
    storageBucket: 'amusic-329813.appspot.com',
    messagingSenderId: '690568376089',
    appId: '1:690568376089:web:0544b7e324a06dc0949f88',
    measurementId: 'G-3YR072ETL7'
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
firebase.analytics()

export default firebase