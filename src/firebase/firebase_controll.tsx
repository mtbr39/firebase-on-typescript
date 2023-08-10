
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set } from "firebase/database";

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
// const analytics = getAnalytics(app);
// const database = getDatabase(app);

export function writeUserData(userId: any, name: any, email: any, imageUrl: any) {
  const db = getDatabase(app);
  set(ref(db, 'users/' + userId), {
    username: name+10,
    email: email,
    profile_picture : imageUrl
  });
}
