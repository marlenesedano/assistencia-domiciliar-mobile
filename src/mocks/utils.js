export function randomBoolean() {
  return Math.random() < 0.5;
}

export function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function phoneMock() {
  const ddd = `(${randomInt(1, 9)}${randomInt(0, 9)})`;
  const part1 = `9${randomInt(1, 9)}${randomInt(0, 9)}${randomInt(0, 9)}${randomInt(
    0,
    9,
  )}`;

  const part2 = `${randomInt(1, 9)}${randomInt(0, 9)}${randomInt(0, 9)}${randomInt(
    0,
    9,
  )}`;

  return `${ddd} ${part1}-${part2}`;
}

export function cepMock() {
  return `${randomInt(10000, 99999)}-${randomInt(0, 9)}${randomInt(10, 99)}`;
}
