import { z } from "zod";
import { createSchema } from "../../../utils/validators";

const zodSchema = z.object({
  specialty: z.string({ required_error: "Informe uma especialidade" }),
});

export const schema = createSchema(zodSchema);
