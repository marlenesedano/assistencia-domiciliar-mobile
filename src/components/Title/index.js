import * as S from "./styles";

export function Title({ children }) {
  return (
    <S.Container>
      <S.Title>{children}</S.Title>
    </S.Container>
  );
}
