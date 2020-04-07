import firebase from 'firebase/app';

import 'firebase/firebase-firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyBBEPZVD_l2dqyKdQmw2BL8VqgNCBKdPos",
    authDomain: "crwn-db-d807c.firebaseapp.com",
    databaseURL: "https://crwn-db-d807c.firebaseio.com",
    projectId: "crwn-db-d807c",
    storageBucket: "crwn-db-d807c.appspot.com",
    messagingSenderId: "770327230022",
    appId: "1:770327230022:web:e04889d40571de3ce23c47",
    measurementId: "G-P7HYSNQWKB"
  };


  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const privider = new firebase.auth.GoogleAuthProvider();
  privider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(privider);

  export default firebase;