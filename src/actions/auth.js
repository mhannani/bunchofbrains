import {firebase} from "../firebase/firebase";

export const CreateNewUserUsingEmailAndPassword = (email, password, userName) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((user)=>{
            // Signed In
            const currentUser = firebase.auth().currentUser
            currentUser.updateProfile({
                displayName: userName,
            })
            .then(function(){
                // Add more operation on operation success
                // Add the new user to the database
                console.log(`users/${currentUser.uid}/info`)
                firebase.database().ref(`users/${currentUser.uid}/info`).set({
                    uid: currentUser.uid,
                    username: currentUser.displayName,
                    email: email,
                }).then(()=> console.log('added to the database'))

                console.log('userId:', user.uid)
            }, function(err){
                // In case of errors
            })
    })
        .catch((err)=>{
            const errCode = err.code;
            const errMessage = err.message;
            console.log(errCode, errMessage)
        })
}