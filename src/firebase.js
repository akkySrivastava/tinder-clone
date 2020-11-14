import firebase from 'firebase';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBhE1Jhjce3K1uXeFhLE2vWeAVzR3lHvms",
    authDomain: "tinder-cloned-akky.firebaseapp.com",
    databaseURL: "https://tinder-cloned-akky.firebaseio.com",
    projectId: "tinder-cloned-akky",
    storageBucket: "tinder-cloned-akky.appspot.com",
    messagingSenderId: "11623627550",
    appId: "1:11623627550:web:4d099b30f93e6c8c6ee70f",
    measurementId: "G-KCWK0S086J"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();

export default db;