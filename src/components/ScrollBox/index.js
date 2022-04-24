import * as S from "./styles";

export function ScrollBox({ children }) {
  return (
    <S.Container>
      <S.Content>{children}</S.Content>
    </S.Container>
  );
}
