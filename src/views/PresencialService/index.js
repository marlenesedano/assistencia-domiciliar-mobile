import React, { useState, useEffect } from "react";
import { PickerSelect } from "../../components/PickerSelect";
import { Title } from "../../components/Title";
import { Line } from "../../components/Line";
import { Button } from "../../components/Button";
import { getCities, getUfs } from "../../services/locality";
import { specialties } from "../../services/specialty";
import { schema } from "./schema";

import * as S from "./styles";

export function PresencialService({ navigation }) {
  const [states, setStates] = useState("");
  const [selectedState, setSelectedState] = useState({ state: {} });
  const [selectedCity, setSelectedCity] = useState({ city: {} });
  const [cities, setCities] = useState("");
  const [errors, setErrors] = useState({});
  const [selectedSpecialty, setSelectedSpecialty] = useState();

  const handleSubmit = async () => {
    const currentForm = {
      type: "presencial",
      state: selectedState,
      city: selectedCity,
      specialty: selectedSpecialty,
    };

    const validationErrors = schema.validate(currentForm);

    if (Object.keys(validationErrors).length === 0) {
      navigation.navigate("PatientTabs", {
        screen: "ProfessionalSearch",
        params: currentForm,
      });
    } else {
      setErrors(validationErrors);
    }
  };

  useEffect(() => {
    (async function loadUfs() {
      const response = await getUfs();

      const pickerStates = response.map((item) => {
        return { value: { uf: item.sigla, name: item.nome }, label: item.nome };
      });

      setStates(pickerStates);
    })();
  }, []);

  useEffect(() => {
    (async function loadCities() {
      const response = await getCities(selectedState.uf);

      const pickerCities = response.map((item) => {
        return { value: { id: item.id, name: item.nome }, label: item.nome };
      });

      setCities(pickerCities);
    })();
  }, [selectedState]);

  return (
    <S.Container>
      <Title>Buscar atendimento presencial</Title>
      <S.Label>Escolha uma especialidade</S.Label>
      <PickerSelect
        items={specialties}
        error={errors.specialty}
        onValueChange={(value) => setSelectedSpecialty(value)}
      />
      <S.Label>Estado</S.Label>
      <PickerSelect
        items={[{ value: {}, label: "Escolha seu estado" }, ...states]}
        onValueChange={(value) => setSelectedState(value)}
        error={errors["state.uf"]}
      />
      <S.Label>Cidade</S.Label>
      <PickerSelect
        items={[{ value: {}, label: "Escolha sua cidade" }, ...cities]}
        onValueChange={(value) => setSelectedCity(value)}
        error={errors["city.id"]}
      />
      <Line />
      <Button margin="20px 0px" onPress={handleSubmit}>
        Buscar
      </Button>
      <Button margin="10px 0px" type="secondary">
        Cancelar
      </Button>
    </S.Container>
  );
}
