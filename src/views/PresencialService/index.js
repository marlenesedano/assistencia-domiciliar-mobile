/* eslint-disable import/newline-after-import */
import React, { useState, useEffect } from "react";
import { Alert } from "react-native";
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
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    const currentForm = {
      state: selectedState,
      city: selectedCity,
    };

    const validationErrors = schema.validate(currentForm);

    if (Object.keys(validationErrors).length === 0) {
      setLoading(true);

      const response = "";

      if (response != null) {
        Alert.alert("Ops", response);
      } else {
        // navigation.navigate("Login", currentForm);
        setLoading(false);
      }
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
      <PickerSelect items={specialties} error={errors.specialty} />
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
      <Button margin="20px 0px" onPress={handleSubmit} isLoading={loading}>
        Buscar
      </Button>
      <Button margin="10px 0px" type="secundary">
        Cancelar
      </Button>
    </S.Container>
  );
}
