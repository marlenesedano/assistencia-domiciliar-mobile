import { FontAwesome5, Feather } from "@expo/vector-icons";
import { Button } from "../../components/Button";
import { Line } from "../../components/Line";
import { Title } from "../../components/Title";
import { useProfile } from "../../context/ProfileContext";

import * as S from "./styles";

export function Schedule({ navigation, route }) {
  const { profile } = useProfile();

  const schedule = route.params;
  const { professional, patient } = schedule;

  const statusMessages = {
    pending:
      profile.type === "professional"
        ? "Aguardando sua aprovação"
        : "Aguardando aprovação do médico",
    cancel:
      profile.type === "professional"
        ? "Cancelado por você"
        : "Agendamento cancelado pelo médico",
    accepted:
      profile.type === "professional"
        ? "Você aceitou o agendamento"
        : "Agendamento aceito pelo médico",
    checked: "Atendimento concluído",
  };

  return (
    <S.Container>
      <Title>Agendamento</Title>
      <S.Whapper>
        <S.Information>
          <FontAwesome5 name="user-circle" size={50} color="black" />
          <S.Content>
            <S.PersonName>
              {profile.type === "patient" ? professional.name : patient.name}
            </S.PersonName>
            <S.ScheduleDate>
              {`${schedule.scheduleDate} ${schedule.scheduleHour}`}
            </S.ScheduleDate>
          </S.Content>
        </S.Information>
        <S.Contact>
          <Feather name="phone" size={24} color="black" />
          <S.PersonPhone>
            {profile.type === "patient" ? professional.phone : patient.phone}
          </S.PersonPhone>
        </S.Contact>
      </S.Whapper>
      <S.Label>Endereço</S.Label>
      <S.Whapper>
        <S.LabelAddress>{`${schedule.street}, ${schedule.number}`}</S.LabelAddress>
        <S.LabelAddress>{`${schedule.city.name} - ${schedule.state.uf}, CEP: ${schedule.cep}`}</S.LabelAddress>
        {!!schedule.complement && (
          <>
            <S.LabelAddress>{` `}</S.LabelAddress>
            <S.LabelAddress>{`Complemento: ${schedule.complement}`}</S.LabelAddress>
          </>
        )}
      </S.Whapper>
      <S.Status>Status:</S.Status>
      <S.Label>{statusMessages[schedule.status]}</S.Label>
      {profile.type === "professional" && (
        <>
          <Line />
          <Button
            margin="10px 0px 0px 0px"
            onPress={() => navigation.navigate("PatientEvaluation")}
          >
            Aceitar
          </Button>
          <Button margin="20px 0px 0px 0px" type="secondary">
            Recusar
          </Button>
        </>
      )}
    </S.Container>
  );
}
