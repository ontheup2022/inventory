import firebase from 'firebase/app'
import 'firebase/firestore'

// Initialize Cloud Firestore through Firebase
if (!firebase.apps.length) {
    const firebaseConfig = {
        // apiKey: "api-key",
        // authDomain: "project-id.firebaseapp.com",
        // databaseURL: "https://project-id.firebaseio.com",
        // projectId: "project-id",
        // storageBucket: "project-id.appspot.com",
        // messagingSenderId: "sender-id",
        // appId: "app-id",
    
    }
    firebase.initializeApp(firebaseConfig)
}

export const db = firebase.firestore()