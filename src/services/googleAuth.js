import { googleProvider, auth } from '../config/firebase';


export async function googleLogin () {
    let user;

    await auth.signInWithPopup(googleProvider)
    .then(response => user = response.user)
    .catch(err => console.log("Error: ", err))

    return user;
}


export async function logout() {
    let status;

    await auth.signOut()
    .then(() => status = true)
    .catch(err => console.log("Error: ", err))

    return status;
}