import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBj-atTGRbTJLI_JR-4K-T1zeXlIgN6ExE",
    authDomain: "shoe-store-71b4a.firebaseapp.com",
    databaseURL: "https://shoe-store-71b4a.firebaseio.com",
    projectId: "shoe-store-71b4a",
    storageBucket: "shoe-store-71b4a.appspot.com",
    messagingSenderId: "1042519397722",
    appId: "1:1042519397722:web:521435fb22bb1c20ddcf63",
    measurementId: "G-FTWHNDBF96"
};
firebase.initializeApp(firebaseConfig);

export const createUserProfileDocument = async(userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();
    
    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch(error){
            console.log('error creating user', error.message);
        }
    }
    return userRef;
};


export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
