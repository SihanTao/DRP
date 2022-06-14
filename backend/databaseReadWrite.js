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

import { getFirestore, collection, addDoc, setDoc, doc } from "firebase/firestore";
import { async } from "@firebase/util";

export async function testAddFireStore() {
    const db = getFirestore();
    const citiesRef = collection(db, "cities");

    await setDoc(doc(citiesRef, "SF"), {
        name: "San Francisco", state: "CA", country: "USA",
        capital: false, population: 860000,
        regions: ["west_coast", "norcal"]
    });
    await setDoc(doc(citiesRef, "LA"), {
        name: "Los Angeles", state: "CA", country: "USA",
        capital: false, population: 3900000,
        regions: ["west_coast", "socal"]
    });
    await setDoc(doc(citiesRef, "DC"), {
        name: "Washington, D.C.", state: null, country: "USA",
        capital: true, population: 680000,
        regions: ["east_coast"]
    });
    await setDoc(doc(citiesRef, "TOK"), {
        name: "Tokyo", state: null, country: "Japan",
        capital: true, population: 9000000,
        regions: ["kanto", "honshu"]
    });
    await setDoc(doc(citiesRef, "BJ"), {
        name: "Beijing", state: null, country: "China",
        capital: true, population: 21500000,
        regions: ["jingjinji", "hebei"]
    });
}

// This is a test function
export function addArticles(data) {
    const db = getDatabase();
    // var collection = firebase.firestore().collection('test_articles');
    var collection = ref(db, "test_articles/" + uuid.v1());
    set(collection, data);
    alert('Pressed!');
}
