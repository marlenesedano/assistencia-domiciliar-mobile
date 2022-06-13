import { useState } from "react";
import { Alert } from "react-native";
import { useProfile } from "../../context/ProfileContext";
import { Title } from "../../components/Title";
import { TextField } from "../../components/TextField";
import { Button } from "../../components/Button";
import { updateProfile } from "../../services/patient";
import { schema } from "./schema";

import * as S from "./styles";

export function PatientProfile({ navigation }) {
  const { profile, setProfile } = useProfile();
  const [form, setForm] = useState(profile.data);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    const validationErrors = schema.validate(form);
    if (Object.keys(validationErrors).length === 0) {
      setLoading(true);

      try {
        const response = await updateProfile(form);

        if (response != null) {
          Alert.alert("Ops", response);
        } else {
          setProfile({ ...profile, data: form });
          setLoading(false);
          Alert.alert("Ok", "Perfil atualizado com sucesso");
          return;
        }
      } catch (error) {
        Alert.alert("Ops", error.message);
      }
    }

    setErrors(validationErrors);
  };

  const updateForm = (field, value) => {
    setForm((oldForm) => ({ ...oldForm, [field]: value }));
  };

  return (
    <S.Container>
      <Title>Perfil do Paciente</Title>
      <TextField
        placeholder="Nome completo"
        label="Nome completo"
        onChangeText={(newValue) => updateForm("name", newValue)}
        error={errors.name}
        defaultValue={profile.data.name}
      />
      <TextField
        placeholder="E-mail"
        label="E-mail"
        onChangeText={(newValue) => updateForm("email", newValue)}
        error={errors.email}
        defaultValue={profile.data.email}
      />
      <TextField
        type="password"
        placeholder="Senha"
        label="Senha"
        onChangeText={(newValue) => updateForm("password", newValue)}
        error={errors.password}
        defaultValue={profile.data.password}
      />
      <TextField
        // mask="(99) 99999-9999"
        placeholder="(99) 99999-9999"
        keyboardType="numeric"
        label="Telefone"
        onChangeText={(newValue) => updateForm("phone", newValue)}
        error={errors.phone}
        defaultValue={profile.data.phone}
      />
      <TextField
        // mask="99/99/9999"
        placeholder="DD/MM/AAAA"
        keyboardType="numeric"
        label="Data de nascimento"
        onChangeText={(newValue) => updateForm("birthDate", newValue)}
        error={errors.birthDate}
        defaultValue={profile.data.birthDate}
      />
      <Button margin="10px 0px" onPress={handleSubmit} isLoading={loading}>
        Alterar Dados
      </Button>
      <Button type="secondary" onPress={() => navigation.navigate("Login")}>
        Sair do Sistema
      </Button>
    </S.Container>
  );
}
