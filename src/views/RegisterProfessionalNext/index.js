import React, { useState, useEffect } from "react";
import { Alert } from "react-native";
import { Checkbox } from "react-native-paper";
import { Title } from "../../components/Title";
import { Button } from "../../components/Button";
import { Line } from "../../components/Line";
import { PickerSelect } from "../../components/PickerSelect";
import { TextField } from "../../components/TextField";
import { getCities, getUfs } from "../../services/locality";
import { createProfessional } from "../../services/professional";
import { schema } from "./schema";

import * as S from "./styles";

export function RegisterProfessionalNext({ route, navigation }) {
  const [states, setStates] = useState("");
  const [selectedState, setSelectedState] = useState({ state: {} });
  const [selectedCity, setSelectedCity] = useState({ city: {} });
  const [cities, setCities] = useState("");
  const [acceptRemote, setAcceptRemote] = useState(false);
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    const currentForm = {
      state: selectedState,
      city: selectedCity,
      acceptRemote,
      description,
    };

    const validationErrors = schema.validate(currentForm);

    if (Object.keys(validationErrors).length === 0) {
      setLoading(true);
      const professionalForm = { ...currentForm, ...route.params };

      const response = await createProfessional(professionalForm);

      if (response != null) {
        Alert.alert("Ops", response);
      } else {
        navigation.navigate("Login", currentForm);
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
      <Title>Cadastro de Profissional</Title>
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
      <S.Content>
        <Checkbox
          status={acceptRemote ? "checked" : "unchecked"}
          onPress={() => {
            setAcceptRemote(!acceptRemote);
          }}
          color="#6930c3"
        />
        <S.Label> Aceita atendimento remoto?</S.Label>
      </S.Content>
      <Line />
      <S.Content>
        <TextField
          label="Descrição do profissional"
          placeholderTextColor="grey"
          numberOfLines={10}
          multiline
          onChangeText={(newValue) => setDescription(newValue)}
        />
      </S.Content>
      <Line />
      <Button margin="10px 0px" onPress={handleSubmit} isLoading={loading}>
        Criar Conta
      </Button>
      <Button
        type="secondary"
        onPress={() => navigation.navigate("RegisterProfessional")}
      >
        Voltar
      </Button>
    </S.Container>
  );
}
