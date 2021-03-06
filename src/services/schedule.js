import {
  doc,
  getDocs,
  addDoc,
  collection,
  setDoc,
  where,
  query,
} from "firebase/firestore";
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

export async function findSchedules(profile) {
  const querySchedule = query(
    collection(db, "schedules"),
    where(`${profile.type}.email`, "==", profile.data.email),
  );

  const snapshot = await getDocs(querySchedule);

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

export async function updateStars(id, stars) {
  const scheduleRef = doc(db, "schedules", id);
  setDoc(scheduleRef, { stars }, { merge: true });
}

export function schedulesAvg(schedules) {
  return schedules.reduce(
    (averageAcc, scheduleItem) => {
      if (!scheduleItem.stars) {
        return averageAcc;
      }

      const sum = averageAcc.sum + scheduleItem.stars;
      const count = averageAcc.count + 1;

      return {
        sum,
        count,
        avg: sum / count,
        schedules: [...averageAcc.schedules, scheduleItem],
      };
    },
    { sum: 0, count: 0, avg: 0, schedules: [] },
  );
}
