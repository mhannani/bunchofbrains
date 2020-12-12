import * as firebase from "firebase/app"
import * as database from "firebase/database"
import "firebase/auth";

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
export { firebase, database};