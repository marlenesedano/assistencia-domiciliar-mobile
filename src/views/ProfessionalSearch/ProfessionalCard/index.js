import { FontAwesome5 } from "@expo/vector-icons";
import { Star } from "../../../components/Star";

import * as S from "./styles";

export function ProfessionalCard({ professional, stars, navigation }) {
  return (
    <S.Container
      onPress={() => navigation.navigate("SearchProfessionalProfile", professional)}
    >
      <S.Content>
        <S.Wrapper>
          <FontAwesome5 name="user-circle" size={50} color="black" />
          <S.WrapperEvaluation>
            <S.Name>{professional.name}</S.Name>
            <S.Especialty>
              {professional.specialty} - {professional.city.name}/
              {professional.state.uf}
            </S.Especialty>
            <S.Remote>
              {professional.acceptRemote ? "Aceita atendimento remoto" : ""}
            </S.Remote>
          </S.WrapperEvaluation>
        </S.Wrapper>
        <Star stars={stars} size={22} />
      </S.Content>
    </S.Container>
  );
}
