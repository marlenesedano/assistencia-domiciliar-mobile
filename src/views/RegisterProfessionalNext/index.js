import * as React from "react";

import { Checkbox } from "react-native-paper";
import { Title } from "../../components/Title";
import { Button } from "../../components/Button";
import { Line } from "../../components/Line";

import * as S from "./styles";
import { PickerSelect } from "../../components/PickerSelect";
import { TextField } from "../../components/TextField";

export function RegisterProfessionalNext({ navigation }) {
  const [checked, setChecked] = React.useState(false);
  return (
    <S.Container>
      <Title>Cadastro de Profissional</Title>
      <S.Label>Estado</S.Label>
      <PickerSelect items={[{ value: "", label: "Escolha uma especialidade" }]} />
      <S.Label>Cidade</S.Label>
      <PickerSelect items={[{ value: "", label: "Escolha uma especialidade" }]} />
      <S.Content>
        <Checkbox
          status={checked ? "checked" : "unchecked"}
          onPress={() => {
            setChecked(!checked);
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
        />
      </S.Content>
      <Line />
      <Button margin="10px 0px">Criar Conta</Button>
      <Button type="secondary" onPress={() => navigation.navigate("Login")}>
        Voltar
      </Button>
    </S.Container>
  );
}
