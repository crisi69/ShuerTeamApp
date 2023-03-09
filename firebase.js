// Import the functions you need from the SDKs you need
import * as firebase from "firebase";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlNcTs42-_t9lu_DmVT18HcjReDa7ytMw",
  authDomain: "shur-team.firebaseapp.com",
  projectId: "shur-team",
  storageBucket: "shur-team.appspot.com",
  messagingSenderId: "908593751382",
  appId: "1:908593751382:web:381c95c5f7a594e2a922f7",
  measurementId: "G-7SVD0CPWBK",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
