import { FontAwesome5 } from "@expo/vector-icons";
import { Line } from "../../components/Line";
import { Star } from "../../components/Star";
import { Title } from "../../components/Title";
import * as S from "./styles";

export function PatientEvaluation() {
  return (
    <S.Container>
      <Title>Avaliações dos seus pacientes</Title>
      <S.Whapper>
        <S.AverageContainer>
          <S.Average>4,0</S.Average>
        </S.AverageContainer>
        <S.Content>
          <Star />
          <S.Label>Média entre X opiniões</S.Label>
        </S.Content>
      </S.Whapper>
      <Line />
      <S.ContentEvaluation>
        <FontAwesome5 name="user-circle" size={50} color="black" />
        <S.WhaperEvaluation>
          <S.NamePatient>Luciana Carvalo</S.NamePatient>
          <S.Evaluation>
            <Star />
            <S.DateEvaluation>13/12/2021</S.DateEvaluation>
          </S.Evaluation>
        </S.WhaperEvaluation>
      </S.ContentEvaluation>

      <S.ContentEvaluation>
        <FontAwesome5 name="user-circle" size={50} color="black" />
        <S.WhaperEvaluation>
          <S.NamePatient>Roberta Testess</S.NamePatient>
          <S.Evaluation>
            <Star />
            <S.DateEvaluation>13/12/2021</S.DateEvaluation>
          </S.Evaluation>
        </S.WhaperEvaluation>
      </S.ContentEvaluation>

      <S.ContentEvaluation>
        <FontAwesome5 name="user-circle" size={50} color="black" />
        <S.WhaperEvaluation>
          <S.NamePatient>Marcos teste</S.NamePatient>
          <S.Evaluation>
            <Star />
            <S.DateEvaluation>13/12/2021</S.DateEvaluation>
          </S.Evaluation>
        </S.WhaperEvaluation>
      </S.ContentEvaluation>
    </S.Container>
  );
}
