import { FirebaseApp } from "firebase/app";
import { User } from "firebase/auth";
import { Database, getDatabase, ref, set, update } from "firebase/database";
import { BasicOtherPlayerNetworker } from "../canvas/OtherPlayer";
// import { Position } from "../canvas/Point";

class FirebaseRealtimeDatabase {
    app: FirebaseApp
    db: Database
    currentUser: User = {uid: "none"} as User

    rootKeyName: string = "vite_react_202308"
    syncDataPlayersRef: string

    otherPlayerNetworker: BasicOtherPlayerNetworker

    constructor(app: FirebaseApp) {
        this.app = app
        this.db = getDatabase(this.app);

        this.syncDataPlayersRef = `${this.rootKeyName}/syncData/players`;

        this.otherPlayerNetworker = new BasicOtherPlayerNetworker(this.db, this.syncDataPlayersRef, this.currentUser)

    }

    setUser(currentUser: User) {
        this.currentUser = currentUser
        this.otherPlayerNetworker.user = currentUser
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

        const key: string = this.syncDataPlayersRef + "/" + this.currentUser.uid
        const updates= {[key]: userData}

        return update(ref(db), updates);
    }

}

export default FirebaseRealtimeDatabase
