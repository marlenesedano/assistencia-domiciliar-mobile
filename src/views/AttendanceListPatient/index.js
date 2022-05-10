import { Attendance } from "../../components/Attendance";
import { Title } from "../../components/Title";
import * as S from "./styles";

export function AttendanceListPatient({ navigation }) {
  return (
    <S.Container>
      <Title>Lista de atendimentos</Title>
      <Attendance
        personName="Marlene Atendimento"
        scheduleDate="21/08 13:00"
        status="pending"
        onPress={() => navigation.navigate("Schedule")}
      />
      <Attendance
        personName="Marlene Dev"
        scheduleDate="21/08 13:00"
        status="cancel"
        onPress={() => navigation.navigate("Schedule")}
      />
      <Attendance
        personName="Front"
        scheduleDate="21/08 13:00"
        status="accepted"
        onPress={() => navigation.navigate("Schedule")}
      />
      <Attendance
        personName="Marlene Atendimento"
        scheduleDate="21/08 13:00"
        status="checked"
        onPress={() => navigation.navigate("Schedule")}
      />
    </S.Container>
  );
}
