import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBCuTKATcl0qgCLS0P3D5UE0iRdljV7c8s",
  authDomain: "netflix-clone-by-collins.firebaseapp.com",
  projectId: "netflix-clone-by-collins",
  storageBucket: "netflix-clone-by-collins.appspot.com",
  messagingSenderId: "921230267016",
  appId: "1:921230267016:web:64800dee7b84ba7f20c53d",
  measurementId: "G-NMQHFCQ52N",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
