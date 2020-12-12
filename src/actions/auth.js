import {firebase} from "../firebase/firebase";

export const CreateNewUserUsingEmailAndPassword = (email, password, userName) => {
    console.log('1---')
    // const currentUser = firebase.auth().currentUser
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((user) => {
            // Signed In

            const currentUser = firebase.auth().currentUser
            console.log(`users/${currentUser.uid}/info`)
            currentUser.updateProfile({
                displayName: userName,
            })
                .then(function () {
                    // Add more operation on operation success
                    // Add the new user to the database
                    firebase.database().ref(`users/${currentUser.uid}/info`).set({
                        // uid: currentUser.uid,
                        username: currentUser.displayName,
                        email: email,
                    }).then(() =>
                            console.log('added to the database'),
                        function (err) {
                            // In case of errors
                            console.log(err)
                        })

                    console.log('userId:', currentUser.uid)
                }, function (err) {
                    // In case of errors
                    console.log(err)
                })
        })
        .catch((err) => {
            const errCode = err.code;
            const errMessage = err.message;
            console.log(errCode, errMessage)
        })
}

export const signOut = () => {
    // Sign out the authenticated user
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
        console.log('sign out successfully')
    }, function(error) {
        // An error happened.
        console.log('an error occurred', error)
    });
}