import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, collection, doc, getDoc, addDoc,query,where, onSnapshot, orderBy, updateDoc } from 'firebase/firestore';


export { initializeApp, getAuth, getFirestore, 
    collection, doc, getDoc, addDoc,query,where, onSnapshot, orderBy, updateDoc
} 