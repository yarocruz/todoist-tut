import firebase from 'firebase/app'
import 'firebase/firebase-firestore'

const firebaseConfig = firebase.initializeApp({
    apiKey: '',
    authDomain: '',
    dataBaseUrl: '',
    projectId: '',
    storageBucket: '',
    messageSenderId: '',
    apiId: ''
})

export { firebaseConfig as firebase }