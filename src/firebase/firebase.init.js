import { initializeApp } from 'firebase/app';
const firebaseConfig = {
  apiKey: 'AIzaSyBhdKIdNxAhgpT4iT0SrqO-sCy9F_yv9JM',
  authDomain: 'classy-chefs.firebaseapp.com',
  projectId: 'classy-chefs',
  storageBucket: 'classy-chefs.appspot.com',
  messagingSenderId: '1066497962085',
  appId: '1:1066497962085:web:edba23f58d4d887a86168c',
};
const app = initializeApp(firebaseConfig);
export default app;
