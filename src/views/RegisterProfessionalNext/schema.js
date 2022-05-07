import { z } from "zod";
import { createSchema } from "../../utils/validators";

const zodSchema = z.object({
  uf: z.string({ required_error: "Selecione um estado" }),
  city: z.string({ required_error: "Selecione uma cidade" }),
});

export const schema = createSchema(zodSchema);
