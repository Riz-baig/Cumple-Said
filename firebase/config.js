import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    query,
    where
}
from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {

    apiKey: "AIzaSyDbZ-efXaWs5JncKBP8BF8f24eO8JyqR1k",

    authDomain: "cumple-said.firebaseapp.com",

    projectId: "cumple-said",

    storageBucket: "cumple-said.firebasestorage.app",

    messagingSenderId: "888853598771",

    appId: "1:888853598771:web:bcc1f1e58a220a49850946"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {
    db,
    collection,
    addDoc,
    getDocs,
    query,
    where
};