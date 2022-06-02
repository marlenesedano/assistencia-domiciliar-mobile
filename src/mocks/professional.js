import { faker } from "@faker-js/faker";
import { phoneMock, randomBoolean, randomInt } from "./utils";
import { addressMock } from "./address";
import { specialties } from "../services/specialty";

export const professionalMock = (id) => {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const email = `profissional${id}@gmail.com`;
  const birthDate = faker.date.birthdate();
  const specialty =
    id % 2 === 0 ? specialties[1].value : specialties[specialties.length - 1].value;

  const professional = {
    name: `${firstName} ${lastName}`,
    email,
    password: "12345678",
    phone: phoneMock(),
    birthDate: `${birthDate.toLocaleDateString("pt-BR")}`,
    description: faker.lorem.words(randomInt(30, 50)),
    specialty,
    ...addressMock(),
    acceptRemote: randomBoolean(),
  };

  return professional;
};

export const professionalMocks = (size) => {
  const professionals = [];

  for (let i = 0; i < size; i += 1) {
    professionals.push(professionalMock(i + 1));
  }

  return professionals;
};
