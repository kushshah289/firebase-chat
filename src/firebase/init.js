import firebase from 'firebase';
import firestore from 'firebase/firestore';
//import { FirebaseApp } from '@firebase/app-types';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyC6LWY_UrpKHNxWQNT2-br-NlMjfcse8V8",
    authDomain: "udemy-ninja-chat-5e82a.firebaseapp.com",
    databaseURL: "https://udemy-ninja-chat-5e82a.firebaseio.com",
    projectId: "udemy-ninja-chat-5e82a",
    storageBucket: "udemy-ninja-chat-5e82a.appspot.com",
    messagingSenderId: "514546482339"
};
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({timestampsInSnapshots: true});

export default firebaseApp.firestore();