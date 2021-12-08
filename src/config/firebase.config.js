import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyANgj9MQsmQcwwvrC5cs_Ii0UkILGBeOQc',
  authDomain: 'rivista-app.firebaseapp.com',
  projectId: 'rivista-app',
  storageBucket: 'rivista-app.appspot.com',
  messagingSenderId: '616968216239',
  appId: '1:616968216239:web:14db5d82bd2133666bfe5a',
  measurementId: 'G-EVCHBJ4RZM',
};

const firebase = Firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const analytics = firebase.analytics();

export { firebase, db, auth, analytics };
