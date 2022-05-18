export function toDate(scheduleDate, scheduleHour) {
  const dateValues = scheduleDate.split("/");
  const hourValues = scheduleHour.split(":");

  return new Date(
    Number(dateValues[2]),
    Number(dateValues[1]) - 1,
    Number(dateValues[0]),
    Number(hourValues[0]),
    Number(hourValues[1]),
  );
}
