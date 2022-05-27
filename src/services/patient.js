import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { auth, db } from "./firebase";

export async function getPatientByEmail(email) {
  const docRef = doc(db, "patients", email);
  const docSnap = await getDoc(docRef);

  return docSnap.data();
}

export async function existsPatientByEmail(email) {
  const docRef = doc(db, "patients", email);
  const docSnap = await getDoc(docRef);

  return docSnap.exists();
}

export async function createPatient(patient) {
  try {
    await createUserWithEmailAndPassword(auth, patient.email, patient.password);
  } catch (error) {
    if (error.code !== "auth/email-already-in-use") {
      return "Erro inesperado";
    }
  }

  const existsPatient = await existsPatientByEmail(patient.email);

  if (existsPatient) {
    return "Paciente já cadastrado.";
  }

  const docRef = doc(db, "patients", patient.email);

  await setDoc(docRef, patient);

  return null;
}

export async function updateProfile(patient) {
  const patientRef = doc(db, "patients", patient.email);
  setDoc(patientRef, patient, { merge: true });
}
