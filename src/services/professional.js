import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc, getDocs, setDoc, collection } from "firebase/firestore";
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

export async function findProfessionals() {
  const snapshot = await getDocs(collection(db, "professionals"));

  const professionals = [];

  snapshot.forEach((professional) => {
    const data = professional.data();
    professionals.push({
      id: professional.id,
      ...data,
      specialty: getSpecialtyName(data.specialty),
    });
  });

  return professionals;
}
