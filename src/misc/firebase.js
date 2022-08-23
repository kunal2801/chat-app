import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: 'AIzaSyB7KBA957BniYaCAEcrrTkQf25I7b7auRE',
  authDomain: 'chat-web-app-b72f4.firebaseapp.com',
  projectId: 'chat-web-app-b72f4',
  storageBucket: 'chat-web-app-b72f4.appspot.com',
  messagingSenderId: '1010674998140',
  appId: '1:1010674998140:web:490e76b7286f8d6915a2f9',
  databaseURL:
    'https://chat-web-app-b72f4-default-rtdb.asia-southeast1.firebasedatabase.app/',
};

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
