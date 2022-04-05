import * as S from "./styles";

import { TextField } from "../../components/TextField";
import { Title } from "../../components/Title";

export function ProfessionalSearch() {
  return (
    <S.Container>
      <Title center={false}>Olá, Marlene</Title>
      <TextField placeholder="Busque por um profissional" icon="search" />
    </S.Container>
  );
}
