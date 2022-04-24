import { Button } from "../../components/Button";
import { Line } from "../../components/Line";
import { ScrollBox } from "../../components/ScrollBox";
import { TextField } from "../../components/TextField";
import { Title } from "../../components/Title";
import * as S from "./styles";

export function NewSchedule({ navigation }) {
  return (
    <ScrollBox>
      <S.Container>
        <Title>Novo Agendamento</Title>
        <TextField label="Data" />
        <TextField label="Hora" />
        <TextField label="Cep" />
        <TextField label="Estado" />
        <TextField label="Cidade" />
        <TextField label="Rua" />
        <TextField label="Numero" />
        <TextField label="Complemento" />
        <Line />
        <Button
          margin="10px 0px 20px 0"
          onPress={() => navigation.navigate("AttendanceList")}
        >
          {" "}
          Novo Agendamento
        </Button>
        <Button type="secundary">Cancelar</Button>
      </S.Container>
    </ScrollBox>
  );
}
