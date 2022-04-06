import { Title } from "../../components/Title";
import { TextField } from "../../components/TextField";
import { Button } from "../../components/Button";
import { Line } from "../../components/Line";

import * as S from "./styles";
import { PickerSelect } from "../../components/PickerSelect";

export function RegisterProfessional({ navigation }) {
  return (
    <S.Container>
      <Title>Cadastro de Profissional</Title>
      <TextField placeholder="Nome completo" label="Nome completo" />
      <TextField placeholder="E-mail" label="E-mail" />
      <TextField type="password" placeholder="Senha" label="Senha" />
      <TextField
        type="password"
        placeholder="Confirme a senha"
        label="Confirmar Senha"
      />
      <TextField
        mask="(99) 99999-9999"
        placeholder="(99) 99999-9999"
        keyboardType="numeric"
        label="Telefone"
      />
      <S.Label>Especialidades</S.Label>
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
      <Line />
      <Button
        margin="10px 0px"
        onPress={() => navigation.navigate("RegisterProfessionalNext")}
      >
        Próximo
      </Button>
      <Button type="secondary" onPress={() => navigation.navigate("Login")}>
        Cancelar
      </Button>
    </S.Container>
  );
}
