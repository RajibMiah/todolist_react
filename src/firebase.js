import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyDom1waq3YXYNnPX_qqLyMNHtJ1qOCExJg",
    authDomain: "todolist-26ddb.firebaseapp.com",
    databaseURL: "https://todolist-26ddb.firebaseio.com",
    projectId: "todolist-26ddb",
    storageBucket: "todolist-26ddb.appspot.com",
    messagingSenderId: "14654556477",
    appId: "1:14654556477:web:6107b42cee69fdb9c95d54",
    measurementId: "G-4EMRF0CS2C"
});

export { firebaseConfig as firebase };