import React, { useState, useEffect } from "react";
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
  const [ufs, setUfs] = useState("");
  const [selectedUf, setSelectedUf] = useState();
  const [selectedCity, setSelectedCity] = useState();
  const [cities, setCities] = useState("");
  const [acceptRemote, setAcceptRemote] = useState(false);
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = () => {
    const currentForm = {
      uf: selectedUf,
      city: selectedCity,
      acceptRemote,
      description,
    };

    const validationErrors = schema.validate(currentForm);
    if (Object.keys(validationErrors).length === 0) {
      navigation.navigate("ProfessionalTabs", currentForm);
      return;
    }

    setErrors(validationErrors);

    const professionalForm = { ...currentForm, ...route.params };

    createProfessional(professionalForm);
  };

  useEffect(() => {
    (async function loadUfs() {
      const response = await getUfs();

      const pickerUfs = response.map((item) => {
        return { value: item.sigla, label: item.nome };
      });

      setUfs(pickerUfs);
    })();
  }, []);

  useEffect(() => {
    (async function loadCities() {
      const response = await getCities(selectedUf);

      const pickerCities = response.map((item) => {
        return { value: item.id, label: item.nome };
      });

      setCities(pickerCities);
    })();
  }, [selectedUf]);

  return (
    <S.Container>
      <Title>Cadastro de Profissional</Title>
      <S.Label>Estado</S.Label>
      <PickerSelect
        items={[{ value: "", label: "Escolha seu estado" }, ...ufs]}
        onValueChange={(value) => setSelectedUf(value)}
        error={errors.uf}
      />
      <S.Label>Cidade</S.Label>
      <PickerSelect
        items={[{ value: "", label: "Escolha sua cidade" }, ...cities]}
        onValueChange={(value) => setSelectedCity(value)}
        error={errors.city}
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
      <Button margin="10px 0px" onPress={handleSubmit}>
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
