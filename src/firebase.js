import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyC6H58q5iXShYPExtKAMyu0tJ02qdsgh9U",
  authDomain: "carhouse-9996a.firebaseapp.com",
  projectId: "carhouse-9996a",
  storageBucket: "carhouse-9996a.appspot.com",
  messagingSenderId: "440464107020",
  appId: "1:440464107020:web:5cd77148dfb285f7997029",
  measurementId: "G-3M47HT3Y0Z",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export default auth;
