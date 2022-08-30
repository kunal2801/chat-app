import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/messaging';
import 'firebase/functions';
import { Notification as Toast } from 'rsuite';
import { isLocalhost } from './helpers';

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
export const fcmVapidKey =
  'BMFU_Zu5NSSq_t70EFm0Q1K5ff7Xijn5i1PqDdPh-PcLeBTrhU5KYTs4hz_nq4TpDyuQeHplx47xo9YAv6Nej8M';

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();
export const functions = app.functions('asia-southeast1');

export const messaging = firebase.messaging.isSupported()
  ? app.messaging()
  : null;
if (messaging) {
  messaging.onMessage(({ notification }) => {
    const { title, body } = notification;
    Toast.info({ title, description: body, duration: 7000 });
  });
}
if (isLocalhost) {
  functions.useEmulator('localhost', 5001);
}
