import { FontAwesome5 } from "@expo/vector-icons";
import { Star } from "../../../components/Star";

import * as S from "./styles";

export function ProfessionalCard({ professional, specialty, stars, navigation }) {
  return (
    <S.Container onPress={() => navigation.navigate("SearchProfessionalProfile")}>
      <S.Content>
        <S.Wrapper>
          <FontAwesome5 name="user-circle" size={50} color="black" />
          <S.WrapperEvaluation>
            <S.Name>{professional}</S.Name>
            <S.Especialty>{specialty}</S.Especialty>
          </S.WrapperEvaluation>
        </S.Wrapper>
        <Star stars={stars} size={22} />
      </S.Content>
    </S.Container>
  );
}
