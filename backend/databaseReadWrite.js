import { getDatabase, ref, set, onValue } from "firebase/database";
import uuid from 'react-native-uuid';
import { async } from "@firebase/util";
import { getFirestore, collection, addDoc, setDoc, doc, getDoc, updateDoc, deleteField, deleteDoc } from "firebase/firestore";
import { Alert } from "react-native";
import { DEV_STATUS } from "../constants/DevStatus"

const ALERT_ON = false

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

export async function addDataToFireStoreCustom(datas, {coll_name}) {
    const db = getFirestore();
    for (let i = 0; i < datas.length; i++) {
        await addDoc(collection(db, coll_name), datas[i]);
    }
}

/**
 * Uploads and overwrites a piece of data(doc) to the fireStore database.
 * @param data       data of the document
 * @param coll_name  collection name
 * @param doc_name   document name
 */
export async function addSingleDataToFireStore(data, {coll_name, doc_name}) {
    const db = getFirestore();
    const dataRef = doc(db, coll_name, doc_name);
    await setDoc(dataRef, data)
    if (DEV_STATUS != "publishing" && ALERT_ON) {
        Alert.alert(
            "Successfully added to database",
            JSON.stringify(data)
        )
    }
}

/**
 * Uploads and merges a piece of data(doc) to the fireStore database.
 * @param data       data of the document
 * @param coll_name  collection name
 * @param doc_name   document name
 */
export async function mergeSingleDataToFireStore(data, {coll_name, doc_name}) {
    const db = getFirestore();
    const dataRef = doc(db, coll_name, doc_name);
    await setDoc(dataRef, data, { merge: true });
    if (DEV_STATUS != "publishing" && ALERT_ON) {
        Alert.alert(
            "Successfully merged to database",
            JSON.stringify(data)
        )
    }
}

/**
 * Deletes a piece of data(doc) from the fireStore database.
 * @param coll_name  collection name
 * @param doc_name   document name
 */
export function deleteSingleDataFromFireStore({coll_name, doc_name}) {
    const db = getFirestore();
    const dataRef = doc(db, coll_name, doc_name);
    deleteDoc(dataRef)
    if (DEV_STATUS != "publishing" && ALERT_ON) {
        Alert.alert(
            "Successfully deleted from database",
            JSON.stringify(data)
        )
    }
}

/**
 * Deletes a field from a document in the fireStore database.
 * @param coll_name  collection name
 * @param doc_name   document name
 * @param field_name field name
 */
export async function deleteFieldInFireStore({coll_name, doc_name, field_name}) {
    const db = getFirestore();
    const dataRef = doc(db, coll_name, doc_name);
    const data = {};
    data[field_name] = deleteField();
    await updateDoc(dataRef, data);
    if (DEV_STATUS != "publishing" && ALERT_ON) {
        Alert.alert(
            "Successfully deleted from database",
            JSON.stringify(data)
        )
    };
}

/**
 * Gets a document from the fireStore database.
 * Returns the data if found. Otherwise returns undefined.
 * @param coll_name  collection name
 * @param doc_name   document name
 * @param doc_data   the document object which receives the data at doc_data.data
 */
export async function ReadDocFromFireStore(doc_data, {coll_name, doc_name}) {
    const db = getFirestore();
    const dataRef = doc(db, coll_name, doc_name);
    const docSnap = await getDoc(dataRef);

    if (docSnap.exists()) {
        if (DEV_STATUS != "publishing" && ALERT_ON) {
            Alert.alert(
                "Document acquired",
                JSON.stringify(docSnap.data())
            )
        };
        doc_data["data"] = docSnap.data()
    } else {
        if (DEV_STATUS != "publishing" && ALERT_ON) {
            Alert.alert(
                "Document acquiring failed"
            )
        };
        doc_data["data"] = undefined
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
    const db = getFirestore();
    const docRef = doc(db, 'facilities', id);
    const docSnap = await getDoc(docRef);
    let avgRating, numRatings;
    if (docSnap.exists()) {
        const data = docSnap.data();
        let total = data.avgRating * data.numRatings + rating;
        numRatings = data.numRatings + 1;
        avgRating = total / numRatings;
    } else {
        console.log("No such document!");
    }

    await updateDoc(docRef, {
        numRatings: numRatings,
        avgRating: avgRating
    });

    return avgRating;
};

export async function getCurrentRating(id) {
    const db = getFirestore();
    const docRef = doc(db, 'facilities', id);
    const docSnap = await getDoc(docRef);
    let rating = 0;
    if (docSnap.exists()) {
        const data = docSnap.data();
        rating = data.avgRating;
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
    
    // console.log("In getCurrentRating: " + rating)
    return rating;
}
