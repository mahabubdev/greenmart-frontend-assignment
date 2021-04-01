import { firebaseConfig } from './firebase.config'
import firebase from 'firebase'

let firebaseInit = firebase.initializeApp(firebaseConfig);

if (firebase.apps.length === 0) {
    firebaseInit = firebase.initializeApp(firebaseConfig);
}

const auth = firebaseInit.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();


export {
    auth,
    firebaseInit,
    googleProvider
}