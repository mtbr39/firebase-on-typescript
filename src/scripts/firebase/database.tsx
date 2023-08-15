import { FirebaseApp } from "firebase/app";
import { User } from "firebase/auth";
import { Database, getDatabase, ref, set, update } from "firebase/database";
// import { Position } from "../canvas/Point";

class FirebaseRealtimeDatabase {
    app: FirebaseApp
    db: Database
    rootKeyName: string = "vite_react_202308"
    currentUser: User = {uid: "none"} as User

    constructor(app: FirebaseApp) {
        this.app = app
        this.db = getDatabase(this.app);
    }

    writeUserData(userId: any, name: any, email: any, imageUrl: any) {
        
        set(ref(this.db, this.rootKeyName + '/users/' + userId), {
            username: name+10,
            email: email,
            profile_picture : imageUrl
        });
    }

    

    updateUserData(position: {x: number, y: number}) {
        if (this.currentUser.uid === "none") {
            console.log("updateUserDataエラー####currentUserなし")
            return
        }

        const db = getDatabase();
        
        const userData = {
            uid: this.currentUser.uid,
            position: position
        };

        const key: string = this.rootKeyName + '/users/' + this.currentUser.uid
        const updates= {[key]: userData}

        return update(ref(db), updates);
    }

    setUser(currentUser: User) {
        this.currentUser = currentUser
    }
}

export default FirebaseRealtimeDatabase
