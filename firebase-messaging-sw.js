// Firebase Cloud Messaging service worker — handles background push
// This file MUST be at the site root (same origin as index.html)

importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyDpuUq6hpSV6MJv9-7-YMJDEr-tmSWuy9c",
  authDomain: "ruach-hashmonait.firebaseapp.com",
  projectId: "ruach-hashmonait",
  storageBucket: "ruach-hashmonait.firebasestorage.app",
  messagingSenderId: "996341650604",
  appId: "1:996341650604:web:6b942f30a35c5e865ebb09"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(payload => {
  const title = payload.notification?.title || payload.data?.title || 'התראה';
  const body  = payload.notification?.body  || payload.data?.body  || '';
  const url   = payload.data?.url || './';
  self.registration.showNotification(title, {
    body,
    icon: 'icon-192.png',
    badge: 'icon-192.png',
    dir: 'rtl',
    lang: 'he',
    data: { url }
  });
});
