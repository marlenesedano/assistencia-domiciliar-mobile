import {
  FontAwesome5,
  Feather,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Star } from "../../components/Star";
import { TextField } from "../../components/TextField";
import { Line } from "../../components/Line";
import { Button } from "../../components/Button";
import * as S from "./styles";

export function SearchProfessionalProfile() {
  return (
    <S.Container>
      <S.Header>
        <FontAwesome5 name="user-circle" size={50} color="black" />
        <S.Wrapper>
          <S.Name>Marlene Sedano</S.Name>
          <S.Label>Desenvolvedora</S.Label>
        </S.Wrapper>
      </S.Header>
      <Star stars={4} />
      <Line />
      <S.Content>
        <Feather name="phone" size={24} color="black" />
        <S.Text>9999-9999</S.Text>
      </S.Content>
      <S.Content>
        <FontAwesome name="whatsapp" size={24} color="black" />
        <S.Text>9999-9999</S.Text>
      </S.Content>
      <S.Content style={{ marginBottom: 16 }}>
        <MaterialCommunityIcons name="email-outline" size={24} color="black" />
        <S.Text>marlenesedano@exemplo.com</S.Text>
      </S.Content>
      <TextField numberOfLines={10} multiline />
      <Line />
      <Button margin="15px 0px 0px 0px">Novo Agendamento</Button>
      <Button margin="10px 0px 0px 0px" type="secondary">
        Voltar
      </Button>
    </S.Container>
  );
}
