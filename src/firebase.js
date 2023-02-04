import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD3Gor2oWkvo4q9Iiz8up88OUpdv9gVaSA",
  authDomain: "facebook-clone-603c1.firebaseapp.com",
  projectId: "facebook-clone-603c1",
  storageBucket: "facebook-clone-603c1.appspot.com",
  messagingSenderId: "807378233001",
  appId: "1:807378233001:web:032671bafe400147e5abb8",
  measurementId: "G-BZMBDKMLFM",
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, db, provider };
