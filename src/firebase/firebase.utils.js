import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDxxQOuuQP_0TMi6wFmRwrdVlWnYCHPgQM",
  authDomain: "dashboard-14f14.firebaseapp.com",
  databaseURL: "https://dashboard-14f14.firebaseio.com",
  projectId: "dashboard-14f14",
  storageBucket: "",
  messagingSenderId: "454539108833",
  appId: "1:454539108833:web:14d3f09f7a7d53cc2f72a0",
  measurementId: "G-C76Z06MVVL"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.error('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;