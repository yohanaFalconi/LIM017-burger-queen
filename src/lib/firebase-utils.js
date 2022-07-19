import { db } from './firebase-config'
import { collection, doc, getDoc, addDoc,query,where, onSnapshot, orderBy,updateDoc } from './firebase-init';

export const menuCollectionRef = collection(db, 'menu-items');
const ordersCollectionRef = collection(db, 'ordered-items');

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
export const orderDataList = (state, callback) => {
  const data = query(ordersCollectionRef, where("state", "==", state), orderBy('date', 'desc'));
  return onSnapshot(data, callback);

}

// Actualiza el estado de la orden
export const updateStatus = (docId, data) => {
  const ref = doc(ordersCollectionRef, docId);
  updateDoc(ref, {
    ...data,
    completedTime: new Date().toLocaleString('es-PE')
  });
};
