import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


var firebaseConfig = {
    apiKey: "AIzaSyCNyObn-POr-ZtnL8H7AZmf0wLiugN6Jrs",
    authDomain: "react1-ffd01.firebaseapp.com",
    databaseURL: "https://react1-ffd01.firebaseio.com",
    projectId: "react1-ffd01",
    storageBucket: "",
    messagingSenderId: "769271564932",
    appId: "1:769271564932:web:21ba86929a36e988"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore()

  export default firebase