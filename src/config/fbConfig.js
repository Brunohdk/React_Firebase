import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage'


var firebaseConfig = {
    YOUR CONFIG
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();


  export default firebase
