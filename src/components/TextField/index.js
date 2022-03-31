import * as S from "./styles";

export function TextField({ label, ...rest }) {
  return (
    <S.Container>
      {label && <S.Label>{label}</S.Label>}
      <S.TextInput {...rest} />
    </S.Container>
  );
}
