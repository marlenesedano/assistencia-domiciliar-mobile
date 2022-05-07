import { useState } from "react";

import { Title } from "../../components/Title";
import { TextField } from "../../components/TextField";
import { Button } from "../../components/Button";
import { Line } from "../../components/Line";
import { PickerSelect } from "../../components/PickerSelect";
import { ScrollBox } from "../../components/ScrollBox";

import { schema } from "./schema";

import * as S from "./styles";

export function RegisterProfessional({ navigation }) {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  const handleNext = async () => {
    const validationErrors = schema.validate(form);
    if (Object.keys(validationErrors).length === 0) {
      navigation.navigate("RegisterProfessionalNext", form);
      return;
    }

    setErrors(validationErrors);
  };

  const handleSelectedSpecialty = (selectedValue) => {
    updateForm("specialty", selectedValue);
  };

  const updateForm = (field, value) => {
    setForm((oldForm) => ({ ...oldForm, [field]: value }));
  };

  return (
    <ScrollBox>
      <S.Container>
        <Title>Cadastro de Profissional</Title>
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
        <S.Label>Especialidades</S.Label>
        <PickerSelect
          onValueChange={handleSelectedSpecialty}
          items={[
            { value: "", label: "Escolha uma especialidade:" },
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
          ]}
        />
        <Line />
        <Button margin="10px 0px" onPress={handleNext}>
          Próximo
        </Button>
        <Button type="secondary" onPress={() => navigation.navigate("Login")}>
          Cancelar
        </Button>
      </S.Container>
    </ScrollBox>
  );
}
