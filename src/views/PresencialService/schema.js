import { z } from "zod";
import { createSchema } from "../../utils/validators";

const zodSchema = z.object({
  state: z.object({ uf: z.string({ required_error: "Selecione um estado" }) }),
  city: z.object({ id: z.string({ required_error: "Selecione uma cidade" }) }),
  specialty: z.string({ required_error: "Informe uma especialidade" }),
});

export const schema = createSchema(zodSchema);
