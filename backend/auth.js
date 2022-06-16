import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    signInAnonymously
} from "firebase/auth";

export const signInAnonymous = () => {
    signInAnonymously(getAuth());
    // alert('You have signed in anonymously!');
}

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


