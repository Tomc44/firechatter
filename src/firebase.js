import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

const firebaseConfig = {

  apiKey: "AIzaSyBFB1wGjjotMpfOrgDKHXhQqAxGSjD3H3U",
  authDomain: "fir-c7b48.firebaseapp.com",
  projectId: "fir-c7b48",
  storageBucket: "fir-c7b48.appspot.com",
  messagingSenderId: "730943487617",
  appId: "1:730943487617:web:a55efcc86e3a04dff2d780",
  measurementId: "G-3CL8ZR3MLC"



};

const firebaseApp = firebase.initializeApp(firebaseConfig);


const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth }
export default firebase;