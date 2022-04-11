import { Button } from "../../components/Button";
import { Line } from "../../components/Line";
import { Title } from "../../components/Title";
import * as S from "./styles";

export function ServiceModality({ navigation }) {
  return (
    <S.Container>
      <Title>Selecione uma modalidade</Title>
      <Button
        type="secondary"
        margin="20px 0px"
        icon="briefcase-medical"
        onPress={() => navigation.navigate("PresencialService")}
      >
        Atendimento Presencial
      </Button>
      <Button type="secondary" margin="10px 0px" icon="camera">
        Atendimento Remoto
      </Button>
      <Line />
      <Button
        type="secondary"
        margin="10px 0px"
        onPress={() => navigation.navigate("ProfessionalSearch")}
      >
        Voltar
      </Button>
    </S.Container>
  );
}
