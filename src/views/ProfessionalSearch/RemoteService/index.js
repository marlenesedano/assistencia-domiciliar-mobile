import { useState } from "react";

import { PickerSelect } from "../../../components/PickerSelect";
import { Title } from "../../../components/Title";
import { Line } from "../../../components/Line";
import { Button } from "../../../components/Button";
import { specialties } from "../../../services/specialty";
import { schema } from "./schema";

import * as S from "./styles";

export function RemoteService({ setCurrentScreen, setSearchFilters }) {
  const [errors, setErrors] = useState({});
  const [selectedSpecialty, setSelectedSpecialty] = useState();

  const handleSubmit = () => {
    const currentForm = {
      type: "remote",
      specialty: selectedSpecialty,
    };

    const validationErrors = schema.validate(currentForm);

    if (Object.keys(validationErrors).length === 0) {
      setSearchFilters(currentForm);
      setCurrentScreen("ProfessionalSearch");
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <S.Container>
      <Title>Buscar atendimento remoto</Title>
      <PickerSelect
        items={specialties}
        error={errors.specialty}
        onValueChange={(value) => setSelectedSpecialty(value)}
      />
      <Line />
      <Button margin="20px 0px" onPress={handleSubmit}>
        Buscar
      </Button>
      <Button
        margin="10px 0px"
        type="secondary"
        onPress={() => setCurrentScreen("ServiceModality")}
      >
        Voltar
      </Button>
    </S.Container>
  );
}
