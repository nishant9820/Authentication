import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDQnICfV_kUbZdLGD9U-i9hmpdnsCCUN3o",
    authDomain: "suvidha-auth.firebaseapp.com",
    projectId: "suvidha-auth",
    storageBucket: "suvidha-auth.appspot.com",
    messagingSenderId: "651324941407",
    appId: "1:651324941407:web:9cbcaaca5fd74ad00867ea"
};

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
export default firebase;