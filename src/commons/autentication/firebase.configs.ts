import firebase from 'firebase/compat'


// BETTO
const firebaseConfig = {
    apiKey: "AIzaSyCUkwEovSweqUvkqEEJCdZbeM14A1F3qMc",
    authDomain: "amusic-329813.firebaseapp.com",
    projectId: "amusic-329813",
    storageBucket: "amusic-329813.appspot.com",
    messagingSenderId: "690568376089",
    appId: "1:690568376089:web:0544b7e324a06dc0949f88",
    measurementId: "G-3YR072ETL7"
};

//ANDREA
/*const firebaseConfig = {
    apiKey: 'AIzaSyChu4B2Mnud2h4GrP4ogEOx6mSlb_RPR64',
    authDomain: 'polimi-amusic.firebaseapp.com',
    projectId: 'polimi-amusic',
    storageBucket: 'polimi-amusic.appspot.com',
    messagingSenderId: '209527741487',
    appId: '1:209527741487:web:56627cda589f8c4f3b7ada',
    measurementId: 'G-7SXNTSB2B2'
}*/

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
firebase.analytics()

export default firebase