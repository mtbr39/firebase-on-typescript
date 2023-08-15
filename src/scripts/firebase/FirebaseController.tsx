import { FirebaseApp, initializeApp } from "firebase/app";
import FirebaseAuth from "./auth";


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

class FirebaseController {
    app: FirebaseApp
    auth: FirebaseAuth

    constructor() {
        this.app = initializeApp(firebaseConfig);
        this.auth = new FirebaseAuth(this.app)
        this.auth.signIn()

    }

}

export default FirebaseController