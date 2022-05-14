import React, { useState, useEffect } from "react";
import { Alert } from "react-native";
import { Button } from "../../components/Button";
import { Line } from "../../components/Line";
import { ScrollBox } from "../../components/ScrollBox";
import { TextField } from "../../components/TextField";
import { Title } from "../../components/Title";
import { PickerSelect } from "../../components/PickerSelect";
import { getCities, getUfs } from "../../services/locality";
import { createSchedule } from "../../services/schedule";
import { schema } from "./schema";

import * as S from "./styles";

export function NewSchedule({ navigation }) {
  const [states, setStates] = useState("");
  const [selectedState, setSelectedState] = useState({ state: {} });
  const [selectedCity, setSelectedCity] = useState({ city: {} });
  const [cities, setCities] = useState("");
  const [errors, setErrors] = useState({});
  const [scheduleDate, setDataSchedule] = useState("");
  const [scheduleHour, setScheduleHour] = useState();
  const [cep, setCep] = useState();
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [complement, setComplement] = useState("");
  const [loading, setLoading] = useState(false);

  const showScheduleError =
    !errors["schedule.date"] && !errors["schedule.hour"] && errors.schedule;

  const handleSubmit = async () => {
    try {
      const currentForm = {
        state: selectedState,
        city: selectedCity,
        scheduleDate,
        scheduleHour,
        cep,
        street,
        number,
        complement,
      };

      const validationErrors = schema.validate({
        ...currentForm,
        schedule: { date: scheduleDate, hour: scheduleHour },
      });

      if (Object.keys(validationErrors).length === 0) {
        setLoading(true);

        const response = await createSchedule(currentForm);

        if (response != null) {
          Alert.alert("Ops", response);
          setLoading(false);
        } else {
          setLoading(false);
          navigation.navigate("PatientTabs");
        }
      } else {
        setErrors(validationErrors);
      }
    } catch (error) {
      Alert.alert(error.message);
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
        return {
          value: { id: item.id, name: item.nome },
          label: item.nome,
        };
      });

      setCities(pickerCities);
    })();
  }, [selectedState]);

  return (
    <ScrollBox>
      <S.Container>
        <Title>Novo Agendamento</Title>
        <S.Wrapper>
          <TextField
            mask="99/99/9999"
            placeholder="DD/MM/AAAA"
            label="Data"
            error={errors["schedule.date"] || (showScheduleError ? " " : "")}
            onChangeText={(newValue) => setDataSchedule(newValue)}
          />
          <S.Space />
          <TextField
            label="Hora"
            mask="99:99"
            placeholder="HH:MM"
            error={errors["schedule.hour"] || (showScheduleError ? " " : "")}
            onChangeText={(value) => setScheduleHour(value)}
          />
        </S.Wrapper>
        {showScheduleError && <S.ErrorLabel>{errors.schedule}</S.ErrorLabel>}
        <TextField
          label="CEP"
          mask="99999-999"
          placeholder="Cep"
          error={errors.cep}
          onChangeText={(value) => setCep(value)}
        />
        <PickerSelect
          label="Estado"
          items={[{ value: {}, label: "Escolha seu estado" }, ...states]}
          onValueChange={(value) => setSelectedState(value)}
          error={errors["state.uf"]}
        />
        <PickerSelect
          label="Cidade"
          items={[{ value: {}, label: "Escolha sua cidade" }, ...cities]}
          onValueChange={(value) => setSelectedCity(value)}
          error={errors["city.id"]}
        />
        <TextField
          label="Rua"
          placeholder="Informe a Rua"
          error={errors.street}
          onChangeText={(value) => setStreet(value)}
        />
        <TextField
          label="Numero"
          placeholder="Informe o Número"
          error={errors.number}
          onChangeText={(value) => setNumber(value)}
        />
        <TextField
          label="Complemento"
          placeholder="Informe o Complemento"
          onChangeText={(value) => setComplement(value)}
        />
        <Line />
        <Button margin="10px 0px 20px 0" onPress={handleSubmit} isLoading={loading}>
          Novo Agendamento
        </Button>
        <Button type="secondary">Cancelar</Button>
      </S.Container>
    </ScrollBox>
  );
}
