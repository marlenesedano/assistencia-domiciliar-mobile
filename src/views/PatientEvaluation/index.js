import { FontAwesome5 } from "@expo/vector-icons";
import { useIsFocused } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { findSchedules, schedulesAvg } from "../../services/schedule";
import { useProfile } from "../../context/ProfileContext";
import { Line } from "../../components/Line";
import { Star } from "../../components/Star";
import { Title } from "../../components/Title";

import * as S from "./styles";

export function PatientEvaluation() {
  const { profile } = useProfile();
  const isFocused = useIsFocused();
  const [average, setAverage] = useState({
    sum: 0,
    count: 0,
    avg: 0,
    schedules: [],
  });

  async function loadSchedules() {
    const response = await findSchedules(profile);
    const avgResult = schedulesAvg(response);
    setAverage(avgResult);
  }

  useEffect(() => {
    loadSchedules();
  }, [isFocused]);

  return (
    <S.Container>
      <Title>Avaliações dos seus pacientes</Title>
      <S.Wrapper>
        <S.AverageContainer>
          <S.Average>{average.avg.toFixed(1)}</S.Average>
        </S.AverageContainer>
        <S.Content>
          <Star stars={average.avg} size={19} />
          <S.Label>Média entre {average.count} opiniões</S.Label>
        </S.Content>
      </S.Wrapper>
      <Line />
      {average?.schedules?.map((schedule) => {
        return (
          <S.ContentEvaluation key={schedule.id}>
            <FontAwesome5 name="user-circle" size={50} color="black" />
            <S.WrapperEvaluation>
              <S.NamePatient>{schedule.patient.name}</S.NamePatient>
              <S.Evaluation>
                <Star stars={schedule.stars} size={19} />
                <S.DateEvaluation>{schedule.scheduleDate}</S.DateEvaluation>
              </S.Evaluation>
            </S.WrapperEvaluation>
          </S.ContentEvaluation>
        );
      })}
    </S.Container>
  );
}
