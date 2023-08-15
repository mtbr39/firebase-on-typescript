import { FirebaseApp } from "firebase/app";
import { getAuth, signInAnonymously, onAuthStateChanged, Auth } from "firebase/auth";



class FirebaseAuth {
  auth: Auth

  constructor(app: FirebaseApp) {
    this.auth = getAuth(app);

    onAuthStateChanged(this.auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            const uid = user.uid;
            console.log("auth-debug", uid, user)
        } else {
            // User is signed out
            console.log("ユーザーがサインアウトしました")
        }
    })

  }

  signIn() {
    return signInAnonymously(this.auth)
  }

  getCurrentUser() {
    const user = this.auth.currentUser;

    return user
  }

}

export default FirebaseAuth


