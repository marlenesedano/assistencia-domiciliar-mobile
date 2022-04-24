import { Attendance } from "../../components/Attendance";
import { Title } from "../../components/Title";
import * as S from "./styles";

export function AttendanceList() {
  return (
    <S.Container>
      <Title>Lista de atendimentos</Title>
      <Attendance
        personName="Marlene Atendimento"
        scheduleDate="21/08 13:00"
        status="pending"
      />
      <Attendance
        personName="Marlene Atendimento"
        scheduleDate="21/08 13:00"
        status="cancel"
      />
      <Attendance
        personName="Marlene Atendimento"
        scheduleDate="21/08 13:00"
        status="accepted"
      />
      <Attendance
        personName="Marlene Atendimento"
        scheduleDate="21/08 13:00"
        status="checked"
      />
    </S.Container>
  );
}
