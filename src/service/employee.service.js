import firebase, {db} from '../firebase';
import {collection, getDocs, getDoc, query, doc, addDoc, deleteDoc, updateDoc,  } from 'firebase/firestore';

const service = {

    // createId:()=> {
    //     return createId();
    // },
    
    saveEmployee: async(data)=>{
        addDoc(collection(db, 'empleado'), data);
    }
}
 export default service;
