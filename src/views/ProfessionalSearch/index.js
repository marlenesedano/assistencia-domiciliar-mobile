import * as S from "./styles";

import { TextField } from "../../components/TextField";
import { Button } from "../../components/Button";
import { Title } from "../../components/Title";

export function ProfessionalSearch({ navigation }) {
  return (
    <S.Container>
      <Title center={false}>Olá, Marlene</Title>
      <TextField placeholder="Busque por um profissional" icon="search" />
      <Button onPress={() => navigation.navigate("ServiceModality")}>
        Modalidade
      </Button>
    </S.Container>
  );
}
