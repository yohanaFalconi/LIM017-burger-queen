
import { initializeApp, getAuth, getFirestore } from './firebase-init';

// import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIitZTP56EFI4XfTgT--6pPnaRJl3sWl8",
  authDomain: "burgerqueen-2a96a.firebaseapp.com",
  projectId: "burgerqueen-2a96a",
  storageBucket: "burgerqueen-2a96a.appspot.com",
  messagingSenderId: "1070108071510",
  appId: "1:1070108071510:web:d87966708b6406bcf98df7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// export const provider = new GoogleAuthProvider();
// export const logInGoogle = () => signInWithPopup(auth, provider);

export const db = getFirestore(app);

