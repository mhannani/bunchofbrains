import app  from "firebase/app"
import 'firebase/auth';
import 'firebase/database'
// import firestore from "firebase/firestore"

// import * as database from "firebase/database"
// import "firebase/auth";
// import "firebase/firestore";
//
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

//! to be uncommented
class Firebase {
    constructor() {
        app.initializeApp(firebaseConfig);
        this.auth = app.auth();
        this.db = app.database();
        this.googleProvider = new app.auth.GoogleAuthProvider();
    }

    // *** Auth API ***
    // Create a new user using email and password
    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    // Log-in using email and password combination
    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);
    // Sign-in using Google Provider
    doSignInWithGoogle = () =>
        this.auth.signInWithPopup(this.googleProvider);

    // log-out
    doSignOut = () => {
        console.log('sign out');
        this.auth.signOut();
    }

    // To reset the forgotten password
    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    // To change the password
    doPasswordUpdate = password =>
        this.auth.currentUser.updatePassword(password);
}

export default Firebase;