import { Line } from "../../components/Line";
import { Title } from "../../components/Title";
import { TextField } from "../../components/TextField";
import { Button } from "../../components/Button";

import * as S from "./styles";

export function Login({ navigation }) {
  return (
    <S.Container>
      <Title>Faça seu login</Title>
      <TextField error="" placeholder="E-mail" label="E-mail" />
      <TextField type="password" placeholder="Senha" label="Senha" />
      <Line />
      <Button margin="10px 0px">Entrar</Button>
      <Button type="secondary" onPress={() => navigation.navigate("Register")}>
        Cadastre-se
      </Button>
    </S.Container>
  );
}
