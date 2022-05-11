import { FontAwesome5, Feather } from "@expo/vector-icons";
import { Button } from "../../components/Button";
import { Line } from "../../components/Line";
import { Title } from "../../components/Title";
import * as S from "./styles";

export function Schedule({ navigation }) {
  return (
    <S.Container>
      <Title>Agendamento</Title>
      <S.Whapper>
        <S.Information>
          <FontAwesome5 name="user-circle" size={50} color="black" />
          <S.Content>
            <S.PersonName>Marlene Atten</S.PersonName>
            <S.ScheduleDate>24/04 15:00</S.ScheduleDate>
          </S.Content>
        </S.Information>
        <S.Contact>
          <Feather name="phone" size={24} color="black" />
          <S.PersonPhone> Contato: 99999-9999</S.PersonPhone>
        </S.Contact>
      </S.Whapper>
      <S.Label>Endereço</S.Label>
      <S.Whapper>
        <S.LabelAdress>Rua jose, 270 Dourados-MS</S.LabelAdress>
        <S.LabelAdress>Cep: 99999-999</S.LabelAdress>
        <S.LabelAdress>Complemento: Bloco K, apto 104</S.LabelAdress>
      </S.Whapper>
      <S.Status>Status:</S.Status>
      <S.Label> Aguardando aprovação do médico</S.Label>
      <Line />

      <Button
        margin="10px 0px 0px 0px"
        onPress={() => navigation.navigate("PatientEvaluation")}
      >
        Aceitar
      </Button>
      <Button margin="20px 0px 0px 0px" type="secondary">
        Recusar
      </Button>
    </S.Container>
  );
}
