import { getPatientByEmail } from "./patient";
import { getProfessionalByEmail } from "./professional";

export async function getProfile(email) {
  const patient = await getPatientByEmail(email);
  if (patient) {
    return {
      type: "patient",
      data: patient,
    };
  }

  const professional = await getProfessionalByEmail(email);
  if (professional) {
    return {
      type: "professional",
      data: professional,
    };
  }
  return null;
}
