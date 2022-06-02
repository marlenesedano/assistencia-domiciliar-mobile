import { faker } from "@faker-js/faker";
import { cepMock, randomInt } from "./utils";
import { addressMock } from "./address";

export const scheduleMock = (patient, professional, status) => {
  let scheduleDateTime = faker.date.between(new Date(), "2022-10-31T00:00:00.000Z");

  const from = new Date();
  from.setMonth(from.getMonth() - 2);
  const createdAt = faker.date.between(from, new Date());

  if (status === "checked") {
    scheduleDateTime = faker.date.between(createdAt, new Date());
  }

  const schedule = {
    cep: cepMock(),
    ...addressMock(),
    complement: "",
    number: `${randomInt(100, 9999)}`,
    street: faker.address.street(),
    patient,
    professional,
    createdAt,
    scheduleDate: scheduleDateTime.toLocaleDateString("pt-BR"),
    scheduleHour: scheduleDateTime.toLocaleTimeString("pt-BR").substring(0, 5),
    status,
  };

  return schedule;
};
