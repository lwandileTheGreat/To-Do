import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCZXTIagEV24VnWo5Zv70KsECMVf9HkQN4",
  authDomain: "to-do-ef0c5.firebaseapp.com",
  projectId: "to-do-ef0c5",
  storageBucket: "to-do-ef0c5.appspot.com",
  messagingSenderId: "414361206606",
  appId: "1:414361206606:web:d3046541bfa78d197be81f",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };
