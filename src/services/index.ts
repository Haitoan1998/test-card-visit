import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc, getDoc, doc } from "firebase/firestore";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBwv4IOLgo2nEJId5WkFqKNVJczkjqbYpM",
  authDomain: "create-visit-card.firebaseapp.com",
  databaseURL: "https://create-visit-card-default-rtdb.firebaseio.com",
  projectId: "create-visit-card",
  storageBucket: "create-visit-card.firebasestorage.app",
  messagingSenderId: "813051412237",
  appId: "1:813051412237:web:f9d37430d522605e7cba44",
  measurementId: "G-2FRQ1FEKZB",
};

// 🔥 tránh khởi tạo lại nhiều lần khi hot reload
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const db = getFirestore(app);

/**
 * Lấy tất cả documents trong 1 collection
 */
export async function getAllDocs(collectionName: string) {
  const colRef = collection(db, collectionName); // ✅ phải truyền db vào đây
  const snapshot = await getDocs(colRef);
  console.log(snapshot.docs)
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}

/**
 * Thêm 1 document vào collection
 */
export async function addDocToCollection(collectionName: string, data: any) {
  const colRef = collection(db, collectionName);
  const docRef = await addDoc(colRef, data);
  return { id: docRef.id, ...data };
}

export async function getDocById(collectionName: string, id: string) {
  const docRef = doc(db, collectionName, id);
  const snapshot = await getDoc(docRef);

  if (snapshot.exists()) {
    return { id: snapshot.id, ...snapshot.data() };
  } else {
    throw new Error("Document không tồn tại!");
  }
}