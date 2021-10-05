import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    apiKey: "AIzaSyDGVityAy6FaaF-HoD3GnNOCBH422lbQ0A",
    authDomain: "messenger-clone-88471.firebaseapp.com",
    projectId: "messenger-clone-88471",
    storageBucket: "messenger-clone-88471.appspot.com",
    messagingSenderId: "80476921281",
    appId: "1:80476921281:web:034fc523c7145be9362340",
    measurementId: "G-JPH6NE6BH8",
});

const db = firebaseApp.firestore();

export default db;
