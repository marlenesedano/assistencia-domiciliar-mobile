import { doc, getDocs, addDoc, collection, setDoc } from "firebase/firestore";
import { toDate } from "../utils/date_utils";
import { db } from "./firebase";

const schedulesCollection = collection(db, "schedules");

export async function createSchedule(schedule) {
  await addDoc(schedulesCollection, {
    ...schedule,
    status: "pending",
    createdAt: new Date(),
  });
}

export async function findSchedules() {
  const snapshot = await getDocs(schedulesCollection);

  const schedules = [];

  snapshot.forEach((schedule) => {
    const data = schedule.data();

    const date = toDate(data.scheduleDate, data.scheduleHour);
    const status = date.getTime() < new Date().getTime() ? "checked" : data.status;

    schedules.push({ id: schedule.id, ...data, status });
  });

  return schedules;
}

export async function updateStatus(id, status) {
  const scheduleRef = doc(db, "schedules", id);
  setDoc(scheduleRef, { status }, { merge: true });
}
