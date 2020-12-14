import * as firebase from "firebase/app"
import * as database from "firebase/database"
import "firebase/auth";
import "firebase/firestore";
// import { functions } from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDWJaKnLIibpYmBVDc5xe362bUQbxQyIJk",
    authDomain: "bunchofbrains-22ce9.firebaseapp.com",
    databaseURL: "https://bunchofbrains-22ce9.firebaseio.com",
    projectId: "bunchofbrains-22ce9",
    storageBucket: "bunchofbrains-22ce9.appspot.com",
    messagingSenderId: "579338837377",
    appId: "1:579338837377:web:6e93ac6785626267f49c80",
    measurementId: "G-WRKNSRBPC0"
};


firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export { firebase, database};

const GoogleAuthProvider = new firebase.auth.GoogleAuthProvider();
const FacebookAuthProvider = new firebase.auth.FacebookAuthProvider();
const TwitterAuthProvider = new firebase.auth.TwitterAuthProvider();

export const signInWithGoogle = () => {
    auth.signInWithPopup(GoogleAuthProvider).then(()=>window.location.replace("/"));
};

export const signInWithFacebook = () => {
    auth.signInWithPopup(FacebookAuthProvider).then(()=>window.location.replace("/"));
};
export const signInWithTwitter = () => {
    auth.signInWithPopup(TwitterAuthProvider).then(()=>window.location.replace("/"));
};


export const generateUserDocument = async (user, additionalData) => {
    if (!user) return;

    const userRef = firestore.doc(`users/${user.uid}`);
    const snapshot = await userRef.get();

    if (!snapshot.exists) {
        const { email, displayName, photoURL } = user;
        try {
            await userRef.set({
                displayName,
                email,
                photoURL,
                ...additionalData
            });
        } catch (error) {
            console.error("Error creating user document", error);
        }
    }
    return getUserDocument(user.uid);
};


const getUserDocument = async uid => {
    if (!uid) return null;
    try {
        const userDocument = await firestore.doc(`users/${uid}`).get();

        return {
            uid,
            ...userDocument.data()
        };
    } catch (error) {
        console.error("Error fetching user", error);
    }
};