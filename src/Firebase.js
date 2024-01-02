// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"   

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8MH-wR4iytiQb-O7daOGeArm97CZUhMI",
  authDomain: "abdu-1fbbf.firebaseapp.com",
  projectId: "abdu-1fbbf",
  storageBucket: "abdu-1fbbf.appspot.com",
  messagingSenderId: "477136623171",
  appId: "1:477136623171:web:6d83d39c486bee3bd466f6",
  measurementId: "G-GJ9M8Z6394"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// const app = firebase.initializeApp(firebaseConfig);
// const auth = firebase.auth()
// const db = app.firestore()

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
export default firebase;

// export{auth, db}
// export {auth};