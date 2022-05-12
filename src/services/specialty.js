export const specialties = [
  { value: undefined, label: "Escolha uma especialidade:" },
  { value: "psychologist", label: "Psicólogo" },
  { value: "nutritionist", label: "Nutricionista" },
  { value: "psychiatrist", label: "Psiquiatra" },
  { value: "physiologist", label: "Fisiologista" },
  { value: "speechHerapist", label: "Fonoaudiólogo" },
  { value: "auxOfNursing", label: "Aux. de Enfermagem" },
  { value: "nurse", label: "Enfermeiro" },
  { value: "nursingTechnician", label: "Técnico de Enfermagem" },
  { value: "elderlyCaregiver", label: "Cuidador de Idoso" },
  { value: "childCaregiver", label: "Cuidador de Criança" },
  { value: "urologist", label: "Urologista" },
  { value: "gynecologist", label: "Ginecologista" },
  { value: "therapist", label: "Terapeuta" },
];

export const getSpecialtyName = (specialty) => {
  const values = specialties.find((element) => {
    return element.value === specialty;
  });

  return values.label;
};
