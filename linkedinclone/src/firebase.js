import firebase from 'firebase';

  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAsykHmoavk-xENJ_iLtmHffiDsbIcI-Mw",
    authDomain: "linkedin-clone-e477a.firebaseapp.com",
    projectId: "linkedin-clone-e477a",
    storageBucket: "linkedin-clone-e477a.appspot.com",
    messagingSenderId: "135350642854",
    appId: "1:135350642854:web:280eb627d7aa479cca2c67",
    measurementId: "G-X3BQCJC3LQ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export { auth, provider, storage };
  export default db;