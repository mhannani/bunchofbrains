import React from "react";
import AppRouter from './routers/AppRouter'
import {firebase} from "./firebase/firebase";
import UserProvider from "./providers/UserProvider";

function App() {
  return (
      <UserProvider>
        <AppRouter/>
      </UserProvider>

  );
}

firebase.auth().onAuthStateChanged((user)=>{
  if(user){
    const currentUser = firebase.auth().currentUser
    console.log('user authenticated successfully', currentUser.uid)
  }
  else{
    console.log('Not authenticated')
  }
})

export default App;
