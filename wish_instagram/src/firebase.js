import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyBA0PnNl75ymZXbQFGi8PgbmIOJ8WV1rN0",
    authDomain: "wish-instagram.firebaseapp.com",
    projectId: "wish-instagram",
    storageBucket: "wish-instagram.appspot.com",
    messagingSenderId: "318530598762",
    appId: "1:318530598762:web:9e77dc34600cde94c45713"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth } 