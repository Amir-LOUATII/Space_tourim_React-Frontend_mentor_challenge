import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDpDWK4eyNxNKZE15QZJmplHs9I3NTOm54",
  authDomain: "space-tourism-frontend-mentor.firebaseapp.com",
  projectId: "space-tourism-frontend-mentor",
  storageBucket: "space-tourism-frontend-mentor.appspot.com",
  messagingSenderId: "125458399363",
  appId: "1:125458399363:web:89327b8337ce35bcb09bb6",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// initi services
const projectFirestore = firebase.firestore();

export { projectFirestore };
