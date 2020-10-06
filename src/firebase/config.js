import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBhasSHfmweB5Ausj0D5as7CkDkZ_uTXqY",
    authDomain: "dreksworld-752ab.firebaseapp.com",
    databaseURL: "https://dreksworld-752ab.firebaseio.com",
    projectId: "dreksworld-752ab",
    storageBucket: "dreksworld-752ab.appspot.com",
    messagingSenderId: "184239213573",
    appId: "1:184239213573:web:da5dfbe3d155bf9c5fa06c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {projectStorage, projectFirestore, timestamp};
