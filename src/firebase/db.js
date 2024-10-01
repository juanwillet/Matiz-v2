
import { getFirestore, collection, getDocs, doc, getDoc } from "firebase/firestore";
import app from "./config";

const db = getFirestore(app);

const getProducts = async (setProductos)=> {const querySnapshot = await getDocs(collection(db, "productos"));
const productos= []
querySnapshot.forEach((doc) => {
  productos.push(doc.data());
})
setProductos(productos)
};

export const getProductsById = async (setProductos, id)=> {const docRef = doc(db, "productos", id);
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
    setProductos(docSnap.data());
} else {
  
  console.log("No such document!");
}
};
export default getProducts
