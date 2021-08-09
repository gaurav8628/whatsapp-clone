// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyAxc-5WvGbg6Yh5MHnkwXJarpZgcQfadsI",
    authDomain: "whatsapp-a9984.firebaseapp.com",
    projectId: "whatsapp-a9984",
    storageBucket: "whatsapp-a9984.appspot.com",
    messagingSenderId: "563376756986",
    appId: "1:563376756986:web:9e84c7e77f46f50fce1143",
    measurementId: "G-PFZJBX29WT"
  };

  const firebaseApp = firebase.initializeApp
  (firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;