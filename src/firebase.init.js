// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1ShuacC-2wg3GH9WyiK8sn_N-VOqnprE",
  authDomain: "simple-firebase-project-1st.firebaseapp.com",
  projectId: "simple-firebase-project-1st",
  storageBucket: "simple-firebase-project-1st.appspot.com",
  messagingSenderId: "393956062353",
  appId: "1:393956062353:web:ea487ab0991fb8d0ca3b30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;