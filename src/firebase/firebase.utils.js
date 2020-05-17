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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

   if (!snapShot.exists) {
       const {displayName, email} = userAuth;
       const createdAt = new Date();

       try {
           await userRef.set({
               displayName,
               email,
               createdAt,
               ...additionalData
           })
       } catch (e) {
           console.log('error creating user', e.message);
       }
   }

    return userRef;
};

firebase.initializeApp(config);

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    console.log(collectionRef);

    const batch = firestore.batch();

    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    });

    return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
        const {title, items} = doc.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    });

   return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {});
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;