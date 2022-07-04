import { db } from '../src/firebase-config'
import { collection, doc, getDoc } from 'firebase/firestore';

export const menuCollectionRef = collection(db, 'menu-items');

export const getItemsById = (id) => {
    const docRef = doc(db, 'menu-items', id);
    const docSnap = getDoc(docRef)
    .then((item) => {
        return {
            id: item.id,
            data: item.data()
    }})
    .catch((err) => {console.log(err.message)});
    return docSnap;
};
