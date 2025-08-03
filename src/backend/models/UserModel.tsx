import { auth } from "../Firebase"

const user = auth.currentUser;
const userModel = {
    uid: user?.uid || "",
    username: user?.displayName || "Guest",
    email: user?.email || "",
    createdAt: new Date()
}

export default userModel;