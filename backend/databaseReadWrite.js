import { getDatabase, ref, set, onValue } from "firebase/database";
import uuid from 'react-native-uuid';
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
export const addStudySpace = (data) => {
    const db = getDatabase();
    var collection = ref(db, "study_space/" + uuid.v4());
    set(collection, data);
    alert('Successfully add a study space');
}

export const addStudySpaces = (datas) => {
    const db = getDatabase();
    var length = datas.length;
    for (let i = 0; i < length; i++) {
        var collection = ref(db, "study_space/" + i);
        set(collection, datas[i]);
    }
}

// This is a test function
export function addArticles(data) {
    const db = getDatabase();
    // var collection = firebase.firestore().collection('test_articles');
    var collection = ref(db, "test_articles/" + uuid.v1());
    set(collection, data);
    alert('Pressed!');
}
