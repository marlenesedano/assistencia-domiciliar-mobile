import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";

export async function getProfessionalByEmail(email) {
  const docRef = doc(db, "professionals", email);
  const docSnap = await getDoc(docRef);

  return docSnap.data();
}

export async function existsProfessionalByEmail(email) {
  const docRef = doc(db, "professionals", email);
  const docSnap = await getDoc(docRef);

  return docSnap.exists();
}
