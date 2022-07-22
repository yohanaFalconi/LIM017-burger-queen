//import { auth, db } from './firebase-config'
import { initializeApp, getAuth, getFirestore, GoogleAuthProvider, signInWithPopup, collection, doc, getDoc, addDoc,query,where, onSnapshot, orderBy,updateDoc } from './firebase-init';

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




export const menuCollectionRef = collection(db, 'menu-items');
const ordersCollectionRef = collection(db, 'order-items');

export const getItemsById = (id) => {
  const docRef = doc(db, 'menu-items', id);
  const docSnap = getDoc(docRef).then((item) => {
    return {
      id: item.id,
      data: item.data()
  }}).catch((err) => {console.log(err.message)});
  return docSnap;
};

export const sendOrderInFirebase = (newOrder) => {
  try {
    const savingOrder = addDoc(ordersCollectionRef, newOrder);
    return savingOrder;
  } catch (error) {
    console.log('error al guardar pedido del cliente en firebase');
    throw new Error(error);
  }
};

// funcion que escucha datos nuevos 
export const sortPendingOrders = (state, callback) => {
  const data = query(ordersCollectionRef, where("state", "==", state), orderBy('date', 'desc'));
  return onSnapshot(data, callback);
}
export const sortCompletedOrders = (state, callback) => {
  const data = query(ordersCollectionRef, where("state", "==", state), orderBy('completedTime', 'desc'));
  return onSnapshot(data, callback);
}

// Actualiza el estado de la orden
export const updateStatus = (docId, data) => {
  const ref = doc(ordersCollectionRef, docId);
  updateDoc(ref, {
    ...data,
    completedTime: new Date().toLocaleString('es-PE'),
    completedSeconds: new Date() / 1000
  });
};
