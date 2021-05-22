import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyBX9RhQlUFG4XF2L7RPs0wJs9LjKrqvXzo",
	authDomain: "clone-e5e41.firebaseapp.com",
	projectId: "clone-e5e41",
	storageBucket: "clone-e5e41.appspot.com",
	messagingSenderId: "253600011409",
	appId: "1:253600011409:web:7af0e6d697ccba739b1b30",
	measurementId: "G-HLH931C7TW",
};

const app = !firebase.apps.length
	? firebase.initializeApp(firebaseConfig)
	: firebase.app();

const db = app.firestore();

export default db;
