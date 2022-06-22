import React, { useState } from "react";
import { Alert } from "react-native";
import { Button } from "../../components/Button";
import { Line } from "../../components/Line";
import { ScrollBox } from "../../components/ScrollBox";
import { TextField } from "../../components/TextField";
import { Title } from "../../components/Title";
import { createSchedule } from "../../services/schedule";
import { useProfile } from "../../context/ProfileContext";
import { schema } from "./schema";

import * as S from "./styles";

export function NewScheduleRemote({ navigation, route }) {
  const { modality, ...professional } = route.params;
  const { profile } = useProfile();
  const [errors, setErrors] = useState({});
  const [scheduleDate, setDataSchedule] = useState("");
  const [scheduleHour, setScheduleHour] = useState();

  const [loading, setLoading] = useState(false);

  const showScheduleError =
    !errors["schedule.date"] && !errors["schedule.hour"] && errors.schedule;

  const handleSubmit = async () => {
    try {
      const currentForm = {
        scheduleDate,
        scheduleHour,
        professional,
        modality,
        patient: { ...profile.data, id: profile.data.email },
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
      setLoading(false);
      Alert.alert(error.message);
    }
  };

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
        <Line />
        <Button margin="10px 0px 20px 0" onPress={handleSubmit} isLoading={loading}>
          Novo Agendamento
        </Button>
        <Button type="secondary" onPress={() => navigation.goBack()}>
          Cancelar
        </Button>
      </S.Container>
    </ScrollBox>
  );
}
