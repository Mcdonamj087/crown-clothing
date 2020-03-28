import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDnYYFkcYhRlTVEYAAERZ4wCbKiIliiaPE",
  authDomain: "crwn-db-b0104.firebaseapp.com",
  databaseURL: "https://crwn-db-b0104.firebaseio.com",
  projectId: "crwn-db-b0104",
  storageBucket: "crwn-db-b0104.appspot.com",
  messagingSenderId: "737624284437",
  appId: "1:737624284437:web:a68dc29750f1d641e8dd1c"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;