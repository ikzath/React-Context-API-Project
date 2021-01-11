import firebase from "firebase"; 


var firebaseConfig = {
  apiKey: "AIzaSyD-UlpLLdSIKPf2IhGUnobkEm1GoT_HO6Y",
  authDomain: "clone-c339a.firebaseapp.com",
  projectId: "clone-c339a",
  storageBucket: "clone-c339a.appspot.com",
  messagingSenderId: "465860203074",
  appId: "1:465860203074:web:2c78f20cbbb1bc096dd3db"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  

  export { db, auth, provider }