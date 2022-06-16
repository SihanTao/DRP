import { getDatabase, ref, set, onValue } from "firebase/database";
import uuid from 'react-native-uuid';
import { async } from "@firebase/util";
import { getFirestore, collection, addDoc, setDoc, doc, runTransaction, updateDoc } from "firebase/firestore";

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

export async function addDataToFireStore(datas) {
    const db = getFirestore();
    for (let i = 0; i < datas.length; i++) {
        await addDoc(collection(db, "facilities"), datas[i]);
    }
}

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

export async function addRating(id, rating) {
    // var collection = firebase.firestore().collection('restaurants');
    // var document = collection.doc(id);
    // var newRatingDocument = document.collection('ratings').doc();

    // return firebase.firestore().runTransaction(function (transaction) {
    //     return transaction.get(document).then(function (doc) {
    //         var data = doc.data();

    //         var newAverage =
    //             (data.numRatings * data.avgRating + rating.rating) /
    //             (data.numRatings + 1);

    //         transaction.update(document, {
    //             numRatings: data.numRatings + 1,
    //             avgRating: newAverage
    //         });
    //         return transaction.set(newRatingDocument, rating);
    //     });
    // });
    console.log('In addRating function ' + id);
    const db = getFirestore();
    const document = doc(db, 'facilities', id);

    await updateDoc(document, {
        rating: {rating},
    });
};
