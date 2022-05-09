import { z } from "zod";
import { createSchema, emailRegex } from "../../utils/validators";

const zodSchema = z.object({
  name: z
    .string({ required_error: "Campo obrigatório" })
    .min(6, { message: "Deve conter pelo menos 6 caracteres" }),
  email: z
    .string({ required_error: "Campo obrigatório" })
    .regex(emailRegex, { message: "E-mail inválido" }),
  password: z
    .string({ required_error: "Campo obrigatório" })
    .min(6, { message: "Deve conter pelo menos 6 caracteres" }),
  phone: z
    .string({ required_error: "Campo obrigatório" })
    .min(15, { message: "Deve estar preenchido o telefone" }),
  specialty: z.string({ required_error: "Informe uma especialidade" }),
});

export const schema = createSchema(zodSchema);
