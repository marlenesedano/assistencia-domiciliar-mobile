import { Title } from "../../components/Title";
import { TextField } from "../../components/TextField";
import { Button } from "../../components/Button";

import * as S from "./styles";

export function RegisterPatient() {
  return (
    <S.Container>
      <Title>Cadastro de Paciente</Title>
      <TextField placeholder="Nome completo" label="Nome completo" />
      <TextField placeholder="E-mail" label="E-mail" />
      <TextField placeholder="Senha" label="Senha" />
      <TextField placeholder="Telefone" label="Telefone" />
      <TextField placeholder="Data de nascimento" label="Data de nascimento" />
      <Button margin="10px 0px">Criar Conta</Button>
      <Button type="secondary">Cancelar</Button>
    </S.Container>
  );
}
