import * as S from "./styles";

import { TextField } from "../../components/TextField";
import { Button } from "../../components/Button";
import { Title } from "../../components/Title";
import { useProfile } from "../../context/ProfileContext";

export function ProfessionalSearch({ navigation }) {
  const { profile } = useProfile();

  return (
    <S.Container>
      <Title center={false}>Olá, {profile.data.name}</Title>
      <TextField placeholder="Busque por um profissional" icon="search" />
      <Button onPress={() => navigation.navigate("ServiceModality")}>
        Modalidade
      </Button>
    </S.Container>
  );
}
