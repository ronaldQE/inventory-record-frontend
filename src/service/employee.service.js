import firebase, { db } from '../firebase';
import { collection, getDocs, getDoc, query, where, doc, addDoc, deleteDoc, updateDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';

const service = {

    saveEmployee: async (data) => {
        const existCi = await service.existEmployee(data.ci);
        if (existCi.length === 0) {
           return addDoc(collection(db, 'empleado'), data);

        } else {
            toast.error(`La Cédula: ${data.ci} ya esta Registrado`)
        }
    },
    getList: async () => {
        const querySnapshot = await getDocs(collection(db, 'empleado'))
        const employees = [];
        querySnapshot.forEach((doc) => {
            employees.push(
                {
                    id: doc.id,
                    ...doc.data()
                }
            )
        });
        //return employees;
        return employees;
    },
    deleteEmployee: async (id) => {
        await deleteDoc(doc(db, 'empleado', id))
    },
    updateEmployee: async (id, newData) => {
        return updateDoc(doc(db, 'empleado', id), newData)
    },
    getEmployee: async (id) => {
        const data = await getDoc(doc(db, 'empleado', id));
        return data.data();
    },
    existEmployee: async (ci) => {
        const ref = collection(db, "empleado")
        const q = query(ref, where("ci", "==", ci));
        const querySnapshot = await getDocs(q)
        const employees = [];
        querySnapshot.forEach((doc) => {
            employees.push(
                {
                    id: doc.id,
                    ...doc.data()
                }
            )
        });
        return employees;
    }
}
export default service;
