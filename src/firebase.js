import firebase from 'firebase/app'
import 'firebase/firebase-firestore'

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyCfg95vuAT5fwpCuRRyKAC8bdgYLUdIsDA",
    authDomain: "todoist-tut-9f68d.firebaseapp.com",
    databaseURL: "https://todoist-tut-9f68d-default-rtdb.firebaseio.com",
    projectId: "todoist-tut-9f68d",
    storageBucket: "todoist-tut-9f68d.appspot.com",
    messagingSenderId: "610208680976",
    appId: "1:610208680976:web:7c2d0f1b067b7d9c178e95"
})

export { firebaseConfig as firebase }