import { Line } from "../../components/Line";
import { Title } from "../../components/Title";
import { TextField } from "../../components/TextField";
import { Button } from "../../components/Button";

import * as S from "./styles";

export function Login() {
  return (
    <S.Container>
      <Title>Faça seu Login</Title>
      <TextField placeholder="E-mail" label="E-mail" />
      <TextField type="password" placeholder="Senha" label="Senha" />
      <Line />
      <Button margin="10px 0px">Entrar</Button>
      <Button type="secondary">Cadastre-se</Button>
    </S.Container>
  );
}
