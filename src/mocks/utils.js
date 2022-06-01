export function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
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
