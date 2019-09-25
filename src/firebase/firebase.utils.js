import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyATefatcs3T7BlkpoGmtqxOCE4F4BgiR3w",
  authDomain: "crwn-db-6fd51.firebaseapp.com",
  databaseURL: "https://crwn-db-6fd51.firebaseio.com",
  projectId: "crwn-db-6fd51",
  storageBucket: "",
  messagingSenderId: "1089320036298",
  appId: "1:1089320036298:web:9b5926488538512999d133"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider)


export default firebase;