import { z } from "zod";
import { toDate } from "../../utils/date_utils";
import { createSchema } from "../../utils/validators";

export function validadeDate(schedule) {
  const date = toDate(schedule.date, schedule.hour);

  return date.getTime() >= new Date().getTime();
}

const zodSchema = z.object({
  schedule: z
    .object({
      date: z
        .string({ required_error: "Informe a data do agendamento" })
        .min(10, { message: "Data inválida" }),
      hour: z
        .string({ required_error: "Informe a hora do agendamento" })
        .min(5, { message: "Hora inválida" }),
    })
    .refine(validadeDate, {
      message: "Data e Hora deve ser maior do que a atual.",
    }),
});

export const schema = createSchema(zodSchema);
