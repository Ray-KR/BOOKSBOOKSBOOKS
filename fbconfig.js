// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChQTt0GiytZpT_TB4p20H3StkBpKV73d4",
  authDomain: "booksbooksbooks-11.firebaseapp.com",
  databaseURL: "https://booksbooksbooks-11.firebaseio.com",
  projectId: "booksbooksbooks-11",
  storageBucket: "booksbooksbooks-11.appspot.com",
  messagingSenderId: "753242420732",
  appId: "1:753242420732:web:2eec013f74fc032d156e79",
  measurementId: "G-9KD283YXGN"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;