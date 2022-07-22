import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore, collection, doc, getDoc, getDocs, addDoc,query,where, onSnapshot, orderBy, updateDoc } from 'firebase/firestore';


export { initializeApp, getAuth, GoogleAuthProvider, signInWithPopup ,getFirestore, 
    collection, doc, getDoc, getDocs, addDoc,query,where, onSnapshot, orderBy, updateDoc
} 