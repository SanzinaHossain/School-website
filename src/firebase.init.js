import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
//   apiKey: "AIzaSyCmDOnIkMiIFP_BZoB_t-7mX1JnAuz1Jec",
//   authDomain: "school-website-49377.firebaseapp.com",
//   projectId: "school-website-49377",
//   storageBucket: "school-website-49377.appspot.com",
//   messagingSenderId: "379228888114",
//   appId: "1:379228888114:web:9d35ccc509943c7eaf702b",
//   measurementId: "G-SWLY69ZWM9",
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKETS,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export default auth;