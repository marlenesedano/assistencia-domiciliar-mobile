import { useState } from "react";
import { Alert } from "react-native";
import { Title } from "../../components/Title";
import { TextField } from "../../components/TextField";
import { Button } from "../../components/Button";
import { createPatient } from "../../services/patient";
import { schema } from "./schema";

import * as S from "./styles";

export function RegisterPatient({ navigation }) {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    const validationErrors = schema.validate(form);

    if (Object.keys(validationErrors).length === 0) {
      setLoading(true);
      const response = await createPatient(form);

      if (response != null) {
        Alert.alert("Ops", response);
      } else {
        navigation.navigate("Login");
        setLoading(false);
        return;
      }
    }

    setErrors(validationErrors);
  };

  const updateForm = (field, value) => {
    setForm((oldForm) => ({ ...oldForm, [field]: value }));
  };

  return (
    <S.Container>
      <Title>Cadastro de Paciente</Title>
      <TextField
        placeholder="Nome completo"
        label="Nome completo"
        onChangeText={(newValue) => updateForm("name", newValue)}
        error={errors.name}
      />
      <TextField
        placeholder="E-mail"
        label="E-mail"
        onChangeText={(newValue) => updateForm("email", newValue)}
        error={errors.email}
      />
      <TextField
        type="password"
        placeholder="Senha"
        label="Senha"
        onChangeText={(newValue) => updateForm("password", newValue)}
        error={errors.password}
      />
      <TextField
        mask="(99) 99999-9999"
        placeholder="(99) 99999-9999"
        keyboardType="numeric"
        label="Telefone"
        onChangeText={(newValue) => updateForm("phone", newValue)}
        error={errors.phone}
      />
      <TextField
        mask="99/99/9999"
        placeholder="DD/MM/AAAA"
        keyboardType="numeric"
        label="Data de nascimento"
        onChangeText={(newValue) => updateForm("birthDate", newValue)}
        error={errors.birthDate}
      />
      <Button margin="10px 0px" onPress={handleSubmit} isLoading={loading}>
        Criar Conta
      </Button>
      <Button type="secondary" onPress={() => navigation.navigate("Login")}>
        Cancelar
      </Button>
    </S.Container>
  );
}
