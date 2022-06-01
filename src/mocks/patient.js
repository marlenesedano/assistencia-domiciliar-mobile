import { faker } from "@faker-js/faker";
import { phoneMock } from "./utils";
import { createPatient } from "../services/patient";

const patientMock = () => {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const email = faker.internet.email(firstName, lastName);
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

createPatient(patientMock());
