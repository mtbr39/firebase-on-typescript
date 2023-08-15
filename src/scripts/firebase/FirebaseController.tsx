import { FirebaseApp, initializeApp } from "firebase/app";
import FirebaseAuth from "./auth";
import FirebaseRealtimeDatabase from "./database";


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
    database: FirebaseRealtimeDatabase

    constructor() {
        this.app = initializeApp(firebaseConfig);
        this.auth = new FirebaseAuth(this.app)
        this.auth.signIn().then(() => {
            // Signed in..
            console.log("匿名認証完了")
            this.setUserToDB()
        })
        .catch((error) => {
            console.log("匿名認証時エラー", error)
            // const errorCode = error.code;
            // const errorMessage = error.message;
            // ...
        });
        this.database = new FirebaseRealtimeDatabase(this.app)

    }

    setUserToDB() {
        const currentUser = this.auth.getCurrentUser()
        if(currentUser) {
            this.database.setUser(currentUser)
        } else {
            console.log("firebaseControllerにて_currentUser取得失敗")
        }
        
    }

}

export default FirebaseController