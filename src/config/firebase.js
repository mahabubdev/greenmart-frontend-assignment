import { firebaseConfig } from './firebase.config'
import firebase from 'firebase'

const firebaseInit = firebase.initializeApp(firebaseConfig);

// if (firebase.apps.length === 0) {
//     firebaseInit = firebase.initializeApp(firebaseConfig);
// }

const googleProvider = new firebase.auth.GoogleAuthProvider();


export {
    firebaseInit,
    googleProvider
}