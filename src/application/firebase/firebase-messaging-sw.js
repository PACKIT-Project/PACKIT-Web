import firebase from 'firebase/app';
import 'firebase/messaging';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_NOTI_API_KEY,
  authDomain: process.env.REACT_APP_NOTI_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_NOTI_PROJECT_ID,
  storageBucket: process.env.REACT_APP_NOTI_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_NOTI_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_NOTI_APP_ID,
  measurementId: process.env.REACT_APP_NOTI_MEASUREMENT_ID,
};

const app = firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging(app);

export function requestPermission() {
  void Notification.requestPermission().then((permission) => {
    if (permission === 'granted') {
      messaging
        .getToken({ vapidKey: process.env.REACT_APP_NOTI_VAPID })
        .then((token: string) => {
          localStorage.setItem('FCMToken', token);
        })
        .catch((err) => {
          console.log('푸시 토큰 가져오는 중에 에러 발생');
        });
    } else if (permission === 'denied') {
      console.log('푸시 권한 차단');
    }
  });
}
