import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAIqrfjktNPkK3P8eUfWiP7NYAeosw0BWc",
    authDomain: "login-test-f609f.firebaseapp.com",
    databaseURL: "https://login-test-f609f.firebaseio.com",
    projectId: "login-test-f609f",
    storageBucket: "login-test-f609f.appspot.com",
    messagingSenderId: "855189731897",
    appId: "1:855189731897:web:e228e9b3e28b99ab2b2be8",
    measurementId: "G-PY7GHKEGLM"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebaseApp.firestore()