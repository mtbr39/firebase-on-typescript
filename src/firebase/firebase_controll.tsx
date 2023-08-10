
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpjF4sVS7LE8_Sr5qXpuYhimNsQwV_okw",
  authDomain: "mtbr-gcp.firebaseapp.com",
  databaseURL: "https://mtbr-gcp-default-rtdb.firebaseio.com",
  projectId: "mtbr-gcp",
  storageBucket: "mtbr-gcp.appspot.com",
  messagingSenderId: "493255686192",
  appId: "1:493255686192:web:2a3aad3bc7c946d53355f5",
  measurementId: "G-R554T88231"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

export function writeUserData(userId, name, email, imageUrl) {
  const db = getDatabase();
  set(ref(db, 'users/' + userId), {
    username: name+10,
    email: email,
    profile_picture : imageUrl
  });
}
