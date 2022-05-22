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
    const response = await findSchedules(profile);
    setSchedules(response);
  }

  useEffect(() => {
    loadSchedules();
  }, [isFocused]);

  return (
    <ScrollBox>
      <S.Container>
        {schedules.length > 0 && (
          <>
            <Title>
              {profile.type === "patient" ? "Agendamentos" : "Atendimentos"}
            </Title>
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
          </>
        )}
        {schedules.length === 0 && (
          <S.Message>Ops, você não tem nenhum agendamento.</S.Message>
        )}
      </S.Container>
    </ScrollBox>
  );
}
