
import { getFirestore, collection, getDocs, doc, getDoc, addDoc } from "firebase/firestore";
import app from "./config";

const db = getFirestore(app);

const getProducts = async (setProductos, category)=> {
const querySnapshot = await getDocs(collection(db, "productos"));
const productos= []
querySnapshot.forEach((doc) => {
    productos.push(doc.data());
  })
if (!category) {
      setProductos(productos)
} else {
    const productosFiltrados= productos.filter(prod=> prod.category===category)
    setProductos(productosFiltrados)
}

};

export const getProductsById = async (setProductos, id)=> {const docRef = doc(db, "productos", id);
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
    setProductos(docSnap.data());
} else {
  
  console.log("No existe ese producto");
}
};

export const crearOrden = async (orden) => {
  const docRef = await addDoc(collection(db, "ordenes"), orden);
  return docRef.id
}

export default getProducts
