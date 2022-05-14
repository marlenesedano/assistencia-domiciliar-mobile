import { z } from "zod";
import { createSchema } from "../../utils/validators";

export function validadeDate(schedule) {
  const dateValues = schedule.date.split("/");
  const hourValues = schedule.hour.split(":");

  const date = new Date(
    Number(dateValues[2]),
    Number(dateValues[1]) - 1,
    Number(dateValues[0]),
    Number(hourValues[0]),
    Number(hourValues[1]),
  );

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
  cep: z
    .string({ required_error: "Campo obrigatório" })
    .min(9, { message: "CEP inválido" }),
  state: z.object({ uf: z.string({ required_error: "Selecione um estado" }) }),
  city: z.object({ id: z.string({ required_error: "Selecione uma cidade" }) }),
  street: z
    .string({ required_error: "Campo obrigatório" })
    .min(1, { message: "Campo obrigatório" }),
  number: z
    .string({ required_error: "Campo obrigatório" })
    .min(1, { message: "Campo obrigatório" }),
});

export const schema = createSchema(zodSchema);
