/* eslint-disable no-undef */

importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts(
  'https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js'
);

firebase.initializeApp({
  apiKey: 'AIzaSyB7KBA957BniYaCAEcrrTkQf25I7b7auRE',
  authDomain: 'chat-web-app-b72f4.firebaseapp.com',
  projectId: 'chat-web-app-b72f4',
  storageBucket: 'chat-web-app-b72f4.appspot.com',
  messagingSenderId: '1010674998140',
  appId: '1:1010674998140:web:490e76b7286f8d6915a2f9',
  databaseURL:
    'https://chat-web-app-b72f4-default-rtdb.asia-southeast1.firebasedatabase.app/',
});

firebase.messaging();
