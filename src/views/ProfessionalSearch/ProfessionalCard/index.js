import { FontAwesome5 } from "@expo/vector-icons";
import { Star } from "../../../components/Star";

import * as S from "./styles";

export function ProfessionalCard({ professional, specialty, stars }) {
  return (
    <S.Container>
      <S.ContentEvaluation>
        <FontAwesome5 name="user-circle" size={50} color="black" />
        <S.WrapperEvaluation>
          <S.Name>{professional}</S.Name>
          <S.Especialty>{specialty}</S.Especialty>
          <Star stars={stars} />
        </S.WrapperEvaluation>
      </S.ContentEvaluation>
    </S.Container>
  );
}
