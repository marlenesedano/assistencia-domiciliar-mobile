import { z } from "zod";
import { createSchema } from "../../utils/validators";

const zodSchema = z.object({
  scheduleDate: z
    .string({ required_error: "Campo obrigatório" })
    .min(10, { message: "Data inválida" }),
  cep: z
    .string({ required_error: "Campo obrigatório" })
    .min(9, { message: "CEP inválido" }),
  state: z.object({ uf: z.string({ required_error: "Selecione um estado" }) }),
  city: z.object({ id: z.string({ required_error: "Selecione uma cidade" }) }),
});

export const schema = createSchema(zodSchema);
