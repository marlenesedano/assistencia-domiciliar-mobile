import { useIsFocused } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { Attendance } from "../../components/Attendance";
import { Title } from "../../components/Title";
import { useProfile } from "../../context/ProfileContext";
import { findSchedules } from "../../services/schedule";
import { ScrollBox } from "../../components/ScrollBox";

import * as S from "./styles";

export function AttendanceList({ navigation }) {
  const { profile } = useProfile();
  const [schedules, setSchedules] = useState([]);
  const isFocused = useIsFocused();

  async function loadSchedules() {
    const response = await findSchedules();
    setSchedules(response);
  }

  useEffect(() => {
    loadSchedules();
  }, [isFocused]);

  return (
    <ScrollBox>
      <S.Container>
        <Title>{profile.type === "patient" ? "Agendamentos" : "Atendimentos"}</Title>
        {schedules.map((schedule) => {
          const { professional, patient } = schedule;

          return (
            <Attendance
              key={schedule.id}
              personName={
                profile.type === "patient" ? professional.name : patient.name
              }
              scheduleDate={`${schedule.scheduleDate} ${schedule.scheduleHour}`}
              status={schedule.status}
              onPress={() => navigation.navigate("Schedule", schedule)}
            />
          );
        })}
      </S.Container>
    </ScrollBox>
  );
}
