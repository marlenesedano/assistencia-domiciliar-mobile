import { Button } from "../../components/Button";
import { Line } from "../../components/Line";
import { TextField } from "../../components/TextField";
import { Title } from "../../components/Title";
import * as S from "./styles";

export function NewSchedule({ navigation }) {
  return (
    <S.Container>
      <Title>Novo Agendamento</Title>
      <TextField label="Data" />
      <TextField label="Hora" />
      <TextField label="Cep" />
      <Button onPress={() => navigation.navigate("AttendanceList")}>
        Solicitar Agendamento
      </Button>
      <TextField label="Estado" />
      <TextField label="Cidade" />
      <TextField label="Rua" />
      <TextField label="Numero" />
      <TextField label="Complemento" />
      <Line />
      <Button>Solicitar Agendamento</Button>
      <Button type="secundary">Cancelar</Button>
    </S.Container>
  );
}
