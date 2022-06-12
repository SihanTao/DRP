import { getDatabase, ref, set, onValue } from "firebase/database";
import uuid from 'react-native-uuid';
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { app } from "./firebase";
export function writeUserData(name, email, password) {
    const db = getDatabase();

    set(ref(db, 'users/' + uuid.v4()), {
        username: name,
        email: email,
        password: password
    });
    alert('Welcome ' + name + '!\n' + 'Your email:' + email + '\nYour password:' + password);
}

// export function addStudySpace(data) {
//     const db = firebase.firestore();
//     var collection = db.collection('study_space');
//     return collection.add(data);
// }
export const addStudySpace = () => {
    const db = getDatabase();
    var collection = ref(db, "study_space/" + uuid.v4());
    set(collection, data);
    alert('Successfully add a study space');
}

// This is a test function
export function addArticles(data) {
    const db = getDatabase();
    // var collection = firebase.firestore().collection('test_articles');
    var collection = ref(db, "test_articles/" + uuid.v1());
    set(collection, data);
    alert('Pressed!');
}