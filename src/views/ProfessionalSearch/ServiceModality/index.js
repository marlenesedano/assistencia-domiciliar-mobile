import { Button } from "../../../components/Button";
import { Line } from "../../../components/Line";
import { Title } from "../../../components/Title";

import * as S from "./styles";

export function ServiceModality({ setCurrentScreen, setSearchFilters }) {
  const clearFilters = () => {
    setSearchFilters({});
    setCurrentScreen("ProfessionalSearch");
  };

  return (
    <S.Container>
      <Title>Selecione uma modalidade</Title>
      <Button
        type="secondary"
        margin="20px 0px"
        icon="briefcase-medical"
        onPress={() => setCurrentScreen("PresencialService")}
      >
        Atendimento Presencial
      </Button>
      <Button
        type="secondary"
        margin="10px 0px"
        icon="camera"
        onPress={() => setCurrentScreen("RemoteService")}
      >
        Atendimento Remoto
      </Button>
      <Line />
      <Button
        type="secondary"
        margin="10px 0px"
        onPress={() => setCurrentScreen("ProfessionalSearch")}
      >
        Voltar
      </Button>
      <Button type="secondary" margin="10px 0px" onPress={clearFilters}>
        Limpar Filtros
      </Button>
    </S.Container>
  );
}
