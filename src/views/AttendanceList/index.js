import { useState, useEffect } from "react";
import { Attendance } from "../../components/Attendance";
import { Title } from "../../components/Title";
import { useProfile } from "../../context/ProfileContext";
import { findSchedules } from "../../services/schedule";

import * as S from "./styles";

export function AttendanceList({ navigation }) {
  const { profile } = useProfile();
  const [schedules, setSchedules] = useState([]);

  async function loadSchedules() {
    const response = await findSchedules();
    setSchedules(response);
  }

  useEffect(() => {
    loadSchedules();
  }, []);

  return (
    <S.Container>
      <Title>{profile.type === "patient" ? "Agendamentos" : "Atendimentos"}</Title>
      {schedules.map(
        ({ id, status, professional, patient, scheduleDate, scheduleHour }) => (
          <Attendance
            key={id}
            personName={
              profile.type === "patient" ? professional.name : patient.name
            }
            scheduleDate={`${scheduleDate} ${scheduleHour}`}
            status={status}
            onPress={() => navigation.navigate("Schedule")}
          />
        ),
      )}
    </S.Container>
  );
}
