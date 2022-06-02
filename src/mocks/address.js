import { randomInt } from "./utils";

const addresses = [
  {
    city: { id: "5003702", name: "Dourados" },
    state: { uf: "MS", name: "Mato Grosso do Sul" },
  },
  {
    city: { id: "5103403", name: "Cuiabá" },
    state: { uf: "MT", name: "Mato Grosso" },
  },
];

export const addressMock = () => {
  const addressesIndex = randomInt(0, 1);
  return addresses[addressesIndex];
};
