import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyBNLg85tQTKVDtAsp6XhP3m8WEBNQBExfM',
  authDomain: 'net-ninja-marioplan-9d35c.firebaseapp.com',
  databaseURL: 'https://net-ninja-marioplan-9d35c.firebaseio.com',
  projectId: 'net-ninja-marioplan-9d35c',
  storageBucket: 'net-ninja-marioplan-9d35c.appspot.com',
  messagingSenderId: '985815577467'
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
