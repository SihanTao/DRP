import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export function createUserWithEmail(useremail, userpassword) {
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, useremail, userpassword)
    .then((userCredential) => {
        alert('Welcome!\n' + 'Your email:' + email + '\nYour password:' + password);
        // Signed in
        const user = userCredential.user;
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
    });
}



