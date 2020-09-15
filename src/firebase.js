import firebase from 'firebase';

const firebaseConfig = {
    apiKey: 'AIzaSyDuVyuhyi8IAzRf92S0M993Y4F-x8rN2os',
    authDomain: 'challenge-c87f1.firebaseapp.com',
    databaseURL: 'https://challenge-c87f1.firebaseio.com',
    projectId: 'challenge-c87f1',
    storageBucket: 'challenge-c87f1.appspot.com',
    messagingSenderId: '902957853205',
    appId: '1:902957853205:web:b439e43095b86eb7673c1c',
    measurementId: 'G-QKGY1RBM09',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
