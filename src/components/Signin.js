import React from 'react'
import {firestore as db, auth}  from '../firebase.js' 
import firebase from '../firebase.js';


import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";




import {Button} from '@material-ui/core'
function Signin() {
    function signInwithGoogle() {
      
        const authg = getAuth();
        const provider = new GoogleAuthProvider()
        signInWithPopup(authg, provider).then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          // ...
        }).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        });

    } 

  return (
    <div>
        <Button onClick={signInwithGoogle}>Sign in with Google</Button>
      

    </div>
  )
}

export default Signin;