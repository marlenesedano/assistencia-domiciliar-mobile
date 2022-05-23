import { TouchableWithoutFeedback, Linking, Alert } from "react-native";
import {
  FontAwesome5,
  Feather,
  FontAwesome,
  MaterialCommunityIcons,
  Ionicons,
} from "@expo/vector-icons";
import { Star } from "../../components/Star";
import { TextField } from "../../components/TextField";
import { Line } from "../../components/Line";
import { Button } from "../../components/Button";
import * as S from "./styles";

export function SearchProfessionalProfile({ route, navigation, stars }) {
  const professional = route.params;

  const handlePhoneClick = () => {
    const link = `tel:${professional.phone}`;

    Linking.canOpenURL(link)
      .then(() => Linking.openURL(link))
      .catch((err) => Alert.alert("Ops", err.message));
  };

  return (
    <S.Container>
      <S.Header>
        <FontAwesome5 name="user-circle" size={55} color="black" />
        <S.Wrapper>
          <S.Name>{professional.name}</S.Name>
          <S.Label>{professional.specialty}</S.Label>
        </S.Wrapper>
      </S.Header>
      <Star stars={stars} size={22} />
      <Line />
      <TouchableWithoutFeedback onPress={handlePhoneClick}>
        <S.Content>
          <Feather name="phone" size={22} color="black" />
          <S.Text>{professional.phone}</S.Text>
        </S.Content>
      </TouchableWithoutFeedback>
      <S.Content>
        <FontAwesome name="whatsapp" size={24} color="black" />
        <S.Text>{professional.phone}</S.Text>
      </S.Content>
      <S.Content>
        <MaterialCommunityIcons name="email-outline" size={24} color="black" />
        <S.Text>{professional.email}</S.Text>
      </S.Content>
      <S.Content style={{ marginBottom: 16 }}>
        <Ionicons name="home-outline" size={24} color="black" />
        <S.Text>
          {professional.city.name} - {professional.state.uf}
        </S.Text>
      </S.Content>
      <TextField numberOfLines={10} multiline value={professional.description} />
      <Line />
      <Button
        margin="15px 0px 0px 0px"
        onPress={() => navigation.navigate("NewSchedule", professional)}
      >
        Solicitar Agendamento
      </Button>
      <Button margin="10px 0px 0px 0px" type="secondary">
        Voltar
      </Button>
    </S.Container>
  );
}
