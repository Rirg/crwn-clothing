import firebase from "firebase/app";

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD_gUzF5ziRyJammPua2kYx284SjqccIEc",
    authDomain: "crwn-db-632c5.firebaseapp.com",
    databaseURL: "https://crwn-db-632c5.firebaseio.com",
    projectId: "crwn-db-632c5",
    storageBucket: "crwn-db-632c5.appspot.com",
    messagingSenderId: "661477861085",
    appId: "1:661477861085:web:2994cb2878941ab28a9d34"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;