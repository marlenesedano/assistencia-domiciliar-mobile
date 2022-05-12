import { doc, getDoc, getDocs, addDoc, collection } from "firebase/firestore";
import { db } from "./firebase";

const schedulesCollection = collection(db, "schedules");

export async function getSchedule(id) {
  const docRef = doc(db, "schedules", id);
  const docSnap = await getDoc(docRef);

  return docSnap.data();
}

export async function createSchedule(schedule) {
  await addDoc(schedulesCollection, schedule);
}

export async function findSchedules() {
  const snapshot = await getDocs(schedulesCollection);

  const schedules = [];

  snapshot.forEach((schedule) => {
    const data = schedule.data();

    schedules.push({ id: schedule.id, ...data });
  });

  return schedules;
}
