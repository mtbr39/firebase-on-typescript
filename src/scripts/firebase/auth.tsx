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
    signInAnonymously(this.auth)
        .then(() => {
            // Signed in..
            console.log("匿名認証完了")
        })
        .catch((error) => {
            console.log("匿名認証時エラー", error)
            // const errorCode = error.code;
            // const errorMessage = error.message;
            // ...
        });
  }

  getCurrentUser() {
    const user = this.auth.currentUser;

    return user ? user : "no-current-user"
  }

}

export default FirebaseAuth


