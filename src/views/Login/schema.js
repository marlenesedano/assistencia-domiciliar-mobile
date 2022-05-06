import { z } from "zod";
import { createSchema, emailRegex } from "../../utils/validators";

const zodSchema = z.object({
  email: z
    .string({ required_error: "Campo obrigatório" })
    .regex(emailRegex, { message: "E-mail inválido" }),
  password: z
    .string({ required_error: "Campo obrigatório" })
    .min(6, { message: "Deve conter pelo menos 6 caracteres" }),
});

export const schema = createSchema(zodSchema);
