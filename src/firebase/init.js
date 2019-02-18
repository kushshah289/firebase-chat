import firebase from 'firebase';
import firestore from 'firebase/firestore';
//import { FirebaseApp } from '@firebase/app-types';

// Initialize Firebase
var config = {
    apiKey: "",
    authDomain: "udemy-ninja-chat-5e82a.firebaseapp.com",
    databaseURL: "https://udemy-ninja-chat-5e82a.firebaseio.com",
    projectId: "udemy-ninja-chat-5e82a",
    storageBucket: "udemy-ninja-chat-5e82a.appspot.com",
    messagingSenderId: ""
};
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({timestampsInSnapshots: true});

export default firebaseApp.firestore();
