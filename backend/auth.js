import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    GoogleAuthProvider,
    signInWithRedirect
} from "firebase/auth";


// Google SignIn

// export function googleSignIn() {
//     const provider = new GoogleAuthProvider();
//     const auth = getAuth();
//     signInWithRedirect(auth, provider)
//         .catch((error) => {
//             // Handle Errors here.
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             // The email of the user's account used.
//             const email = error.customData.email;
//             // The AuthCredential type that was used.
//             const credential = GoogleAuthProvider.credentialFromError(error);
//             // ...
//         });
// }

// export function googleSignOut() {
//     const auth = getAuth();
//     signOut(auth).then(() => {
//         // Sign-out successful.
//     }).catch((error) => {
//         // An error happened.
//     });
// }

// Traditional Email & Password sign in 
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

export function signInWithEmail(email, password) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
}

export function signOutWrapper() {
    const auth = getAuth();
    signOut(auth).then(() => {
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
    });
}


