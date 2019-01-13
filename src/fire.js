import firebase from "firebase";

var config = {
  apiKey: "AIzaSyAOfLcV7R56O50bTUvvtLlymu2SAqEXnxk",
  authDomain: "notes-ecb64.firebaseapp.com",
  databaseURL: "https://notes-ecb64.firebaseio.com",
  projectId: "notes-ecb64",
  storageBucket: "notes-ecb64.appspot.com",
  messagingSenderId: "706938772405"
};
var fire = firebase.initializeApp(config);
export default fire;
