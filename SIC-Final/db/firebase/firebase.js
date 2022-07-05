import { initializeApp } from "firebase/app";
// import * as storage from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBGpWbvk0nxgel3zPwN4I5NGKS40m-lJkg",
  authDomain: "graphic-password.firebaseapp.com",
  projectId: "graphic-password",
  storageBucket: "graphic-password.appspot.com",
  messagingSenderId: "630855790134",
  appId: "1:630855790134:web:600b8a8c5a18cbdab13297",
  measurementId: "G-GXS0H6Y6E0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
function uploadImage(){
    const ref = firebase.storage().ref()
}