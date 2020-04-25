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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;
  
  const userRef = firestore.doc(`user/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }

  return userRef;
}
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;