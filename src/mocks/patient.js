/* eslint-disable no-console */
import { faker } from "@faker-js/faker";
import { phoneMock } from "./utils";
// import { createPatient } from "../services/patient";

export const patientMock = (id) => {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const email = `paciente${id}@gmail.com`;
  const birthDate = faker.date.birthdate();

  const patient = {
    name: `${firstName} ${lastName}`,
    email,
    password: "12345678",
    phone: phoneMock(),
    birthDate: `${birthDate.toLocaleDateString("pt-BR")}`,
  };

  return patient;
};

export const patientMocks = (size) => {
  const patients = [];

  for (let i = 0; i < size; i += 1) {
    patients.push(patientMock(i + 1));
  }

  return patients;
};

// (async () => {
//   try {
//     await createPatient(patientMock());
//     process.exit(0);
//   } catch (error) {
//     console.log(error);
//   }
// })();
