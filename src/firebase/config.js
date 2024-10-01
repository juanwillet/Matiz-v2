
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCtPl-eP2AasyZ6GrBwlhO5aBBZ7pIKUDg",
  authDomain: "matiz-v2.firebaseapp.com",
  projectId: "matiz-v2",
  storageBucket: "matiz-v2.appspot.com",
  messagingSenderId: "1024012686336",
  appId: "1:1024012686336:web:a66a7e10249a22b251f4e5"
};

const app = initializeApp(firebaseConfig);

export default app