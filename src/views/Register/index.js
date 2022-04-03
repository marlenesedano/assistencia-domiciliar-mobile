import { Button } from "../../components/Button";
import * as S from "./styles";

export function Register() {
  return (
    <S.Container>
      <S.ButtonContainer>
        <S.Text>
          Se você é um profissional e deseja atender pacientes presencialmente,
          selecione a opção Sou Profissional.
        </S.Text>
        <Button type="secondary">Sou Profissional</Button>
      </S.ButtonContainer>
      <S.ButtonContainer>
        <S.Text>
          Se você é um paciente e deseja receber atendimento presencial, selecione a
          opção Sou Paciente.
        </S.Text>
        <Button type="secondary">Sou Paciente</Button>
      </S.ButtonContainer>
    </S.Container>
  );
}
