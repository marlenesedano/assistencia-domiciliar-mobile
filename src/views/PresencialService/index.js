/* eslint-disable import/newline-after-import */
import * as S from "./styles";
import { PickerSelect } from "../../components/PickerSelect";
import { Title } from "../../components/Title";
import { Line } from "../../components/Line";
import { Button } from "../../components/Button";
export function PresencialService({ navigation }) {
  return (
    <S.Container>
      <Title>Buscar atendimento presencial</Title>
      <S.Label>Escolha uma especialidade</S.Label>
      <PickerSelect
        items={[
          { value: "", label: "Escolha uma especialidade:" },
          { value: "psychologist", label: "Psicólogo" },
          { value: "nutritionist", label: "Nutricionista" },
          { value: "psychiatrist", label: "Psiquiatra" },
          { value: "physiologist", label: "Fisiologista" },
          { value: "speechHerapist", label: "Fonoaudiólogo" },
          { value: "auxOfNursing", label: "Aux. de Enfermagem" },
          { value: "nurse", label: "Enfermeiro" },
          { value: "nursingTechnician", label: "Técnico de Enfermagem" },
          { value: "elderlyCaregiver", label: "Cuidador de Idoso" },
          { value: "childCaregiver", label: "Cuidador de Criança" },
          { value: "urologist", label: "Urologista" },
          { value: "gynecologist", label: "Ginecologista" },
          { value: "therapist", label: "Terapeuta" },
        ]}
      />
      <S.Label>Estado</S.Label>
      <PickerSelect items={[{ value: "", label: "Escolha um estado" }]} />
      <S.Label>Cidade</S.Label>
      <PickerSelect items={[{ value: "", label: "Escolha uma cidade" }]} />
      <Line />
      <Button
        margin="20px 0px"
        onPress={() => navigation.navigate("SearchProfessionalProfile")}
      >
        Buscar
      </Button>
      <Button margin="10px 0px" type="secundary">
        Cancelar
      </Button>
    </S.Container>
  );
}
