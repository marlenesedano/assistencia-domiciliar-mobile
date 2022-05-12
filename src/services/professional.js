import { createUserWithEmailAndPassword } from "firebase/auth";
import {
  doc,
  getDoc,
  getDocs,
  setDoc,
  collection,
  where,
  query,
} from "firebase/firestore";
import { auth, db } from "./firebase";
import { getSpecialtyName } from "./specialty";

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

export async function createProfessional(professional) {
  try {
    await createUserWithEmailAndPassword(
      auth,
      professional.email,
      professional.password,
    );
  } catch (error) {
    if (error.code !== "auth/email-already-in-use") {
      return "Erro inesperado";
    }
  }

  const existsProfessional = await existsProfessionalByEmail(professional.email);

  if (existsProfessional) {
    return "Profissional já cadastrado.";
  }

  const docRef = doc(db, "professionals", professional.email);

  await setDoc(docRef, professional);

  return null;
}

export async function findProfessionals(filter) {
  let queryProfessional;

  if (filter.type === "remote") {
    queryProfessional = query(
      collection(db, "professionals"),
      where("specialty", "==", filter.specialty),
      where("acceptRemote", "==", true),
    );
  } else if (filter.type === "presencial") {
    queryProfessional = query(
      collection(db, "professionals"),
      where("specialty", "==", filter.specialty),
      where("state.uf", "==", filter.state.uf),
      where("city.id", "==", filter.city.id),
    );
  } else {
    queryProfessional = query(collection(db, "professionals"));
  }

  const professionals = [];

  const querySnapshot = await getDocs(queryProfessional);

  querySnapshot.forEach((professional) => {
    const data = professional.data();
    professionals.push({
      ...data,
      id: doc.id,
      specialty: getSpecialtyName(data.specialty),
    });
  });

  return professionals;
}
