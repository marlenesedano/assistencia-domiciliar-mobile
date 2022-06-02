/* eslint-disable no-console */
/* eslint-disable no-await-in-loop */
import { patientMocks } from "./patient";
import { scheduleMock } from "./schedule";
import { professionalMocks } from "./professional";
import { randomInt } from "./utils";
import { createPatient } from "../services/patient";
import { createProfessional } from "../services/professional";
import { createSchedule } from "../services/schedule";

const patients = patientMocks(4);
const professionals = professionalMocks(5);
const allStatus = ["pending", "cancel", "accepted", "checked"];

(async () => {
  for (let i = 0; i < patients.length; i += 1) {
    const patient = patients[i];
    await createPatient(patient);

    for (let j = 0; j < professionals.length; j += 1) {
      const professional = professionals[j];
      await createProfessional(professional);

      const randomStatusIndex = randomInt(0, 3);
      const status = allStatus[randomStatusIndex];
      const schedule = scheduleMock(patient, professional, status);
      await createSchedule(schedule);
    }

    console.log(`Finished step ${i}`);
  }

  process.exit(0);
})();
