import { FontAwesome5, Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { Alert } from "react-native";
import { Button } from "../../components/Button";
import { Line } from "../../components/Line";
import { Title } from "../../components/Title";
import { useProfile } from "../../context/ProfileContext";
import { updateStars, updateStatus } from "../../services/schedule";
import { Star } from "../../components/Star";

import * as S from "./styles";

export function Schedule({ navigation, route }) {
  const { profile } = useProfile();

  const schedule = route.params;
  const { professional, patient } = schedule;
  const showButtons =
    profile.type === "professional" && schedule.status === "pending";

  const statusMessages = {
    pending:
      profile.type === "professional"
        ? "Aguardando sua aprovação"
        : "Aguardando aprovação do médico",
    cancel:
      profile.type === "professional"
        ? "Recusado por você"
        : "Agendamento cancelado pelo médico",
    accepted:
      profile.type === "professional"
        ? "Você aceitou o agendamento"
        : "Agendamento aceito pelo médico",
    checked: "Atendimento concluído",
  };

  const acceptSchedule = async () => {
    try {
      await updateStatus(schedule.id, "accepted");
      navigation.navigate("ProfessionalTabs");
    } catch (error) {
      Alert.alert("Ops", error.message);
    }
  };

  const canceledSchedule = async () => {
    try {
      await updateStatus(schedule.id, "cancel");
      navigation.navigate("ProfessionalTabs");
    } catch (error) {
      Alert.alert("Ops", error.message);
    }
  };

  const handleStarsChange = async (stars) => {
    try {
      await updateStars(schedule.id, stars);
    } catch (error) {
      Alert.alert("Ops", error.message);
    }
  };

  return (
    <S.Container>
      <Title>Agendamento</Title>
      <S.Wrapper>
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
        <S.Contact marginTop="10px">
          <MaterialCommunityIcons name="email-outline" size={24} color="black" />
          <S.PersonPhone>
            {profile.type === "patient" ? professional.email : patient.email}
          </S.PersonPhone>
        </S.Contact>
      </S.Wrapper>
      {schedule.modality !== "remote" && (
        <>
          <S.Label>Endereço</S.Label>
          <S.Wrapper>
            <S.LabelAddress>{`${schedule.street}, ${schedule.number}`}</S.LabelAddress>
            <S.LabelAddress>{`${schedule.city.name} - ${schedule.state.uf}, CEP: ${schedule.cep}`}</S.LabelAddress>
            {!!schedule.complement && (
              <>
                <S.LabelAddress>{` `}</S.LabelAddress>
                <S.LabelAddress>{`Complemento: ${schedule.complement}`}</S.LabelAddress>
              </>
            )}
          </S.Wrapper>
        </>
      )}
      <S.Status>Status:</S.Status>
      <S.Label>{statusMessages[schedule.status]}</S.Label>
      {schedule.stars > 0 && profile.type === "professional" && (
        <>
          <Line />
          <S.EvaluationMessage>Avaliação do paciente</S.EvaluationMessage>
          <Star size={24} stars={schedule.stars} />
        </>
      )}
      {schedule.status === "checked" && profile.type === "patient" && (
        <>
          <Line />
          <S.EvaluationContainer>
            <S.EvaluationMessage>Informe a nota de atendimento</S.EvaluationMessage>
            <Star
              size={28}
              stars={schedule.stars}
              onStarChanged={handleStarsChange}
            />
            <Line />
            <Button margin="10px 0px 0px 0px" onPress={() => navigation.goBack()}>
              Voltar
            </Button>
          </S.EvaluationContainer>
        </>
      )}
      {showButtons && (
        <>
          <Line />
          <Button margin="10px 0px 0px 0px" onPress={acceptSchedule}>
            Aceitar
          </Button>
          <Button
            margin="20px 0px 0px 0px"
            type="secondary"
            onPress={canceledSchedule}
          >
            Recusar
          </Button>
        </>
      )}
    </S.Container>
  );
}
