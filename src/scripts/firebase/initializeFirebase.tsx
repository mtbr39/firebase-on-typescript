import { getDatabase, ref, set } from "firebase/database";


export function writeUserData(userId: any, name: any, email: any, imageUrl: any) {
  const db = getDatabase(app);
  set(ref(db, 'users/' + userId), {
    username: name+10,
    email: email,
    profile_picture : imageUrl
  });
}
